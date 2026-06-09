import supabase, { supabaseUrl } from "./supabase";

export async function getCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cars could not be loaded");
  }

  return data;
}

export async function createEditCar(newCar, id) {
  const hasImagePath = newCar.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCar.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCar.image
    : `${supabaseUrl}/storage/v1/object/public/car-images/${imageName}`;

  let query = supabase.from("cars");

  if (!id) query = query.insert([{ ...newCar, image: imagePath }]);

  if (id) query = query.update({ ...newCar, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Car could not be created");
  }

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("car-images")
    .upload(imageName, newCar.image);

  if (storageError) {
    await supabase.from("cars").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Car image could not be uploaded and the car was not created"
    );
  }

  return data;
}

export async function deleteCar(id) {
  const { data, error } = await supabase.from("cars").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Car could not be deleted");
  }

  return data;
}