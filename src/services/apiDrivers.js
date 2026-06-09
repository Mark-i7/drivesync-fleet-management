import { getToday } from "../utils/helpers";
import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export async function getDrivers({ filter, sortBy, page }) {
  let query = supabase
    .from("drivers")
    .select(
      "id, created_at, name, email, status, trips",
      { count: "exact" }
    );

  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Drivers could not be loaded");
  }

  return { data, count };
}

export async function getDriver(id) {
  const { data, error } = await supabase
    .from("drivers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Driver not found");
  }

  return data;
}

export async function getDriversTodayActivity() {
  const { data, error } = await supabase
    .from("drivers")
    .select("id, name, status")
    .or(
      `and(status.eq.Active),and(status.eq.On Leave)`
    )
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Drivers activity could not get loaded");
  }
  return data;
}

export async function updateDriver(id, obj) {
  const { data, error } = await supabase
    .from("drivers")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Driver could not be updated");
  }
  return data;
}

export async function deleteDriver(id) {
  const { data, error } = await supabase.from("drivers").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Driver could not be deleted");
  }
  return data;
}