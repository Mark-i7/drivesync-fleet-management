import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cars() {
  const carsList = [
    { id: 1, model: "Ford Transit", plate: "B303MAR", type: "Cargo Van", status: "Active" },
    { id: 2, model: "Mercedes Sprinter", plate: "B101MAR", type: "Box Truck", status: "In Service" },
    { id: 3, model: "Volkswagen Caddy", plate: "B100MAR", type: "Light Van", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <Row type="horizontal" className="flex justify-between items-center">
        <Heading as="h1">Fleet Vehicles</Heading>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Add New Car
        </button>
      </Row>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
                <th className="p-4 font-medium">Vehicle Model</th>
                <th className="p-4 font-medium">License Plate</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {carsList.map((car) => (
                <tr key={car.id} className="hover:bg-gray-50/50 transition">
                  <td className="p-4 font-semibold text-gray-900">{car.model}</td>
                  <td className="p-4 font-mono text-xs font-bold tracking-wider text-gray-600">
                    {car.plate}
                  </td>
                  <td className="p-4 text-gray-500">{car.type}</td>
                  <td className="p-4 text-right">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                      car.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    }`}>
                      {car.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cars;