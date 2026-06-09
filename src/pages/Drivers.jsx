import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Drivers = () => {
  const driverData = {
    name: "Alex Mercer",
    role: "Full-time Driver",
    status: "Active",
    email: "alex.mercer@drivesync.com",
    phone: "+1 (555) 234-5678",
    license: "B2",
    assignedVehicle: "Ford Transit (XYZ-789)",
    stats: {
      totalDistance: "12,450 km",
      tripsThisMonth: 28,
      rating: "4.9 / 5",
    },
    recentTrips: [
      { id: 1, date: "2026-06-08", route: "Berlin - Paris", status: "Completed" },
      { id: 2, date: "2026-06-05", route: "Stuttgart - Milano", status: "Completed" },
      { id: 3, date: "2026-06-02", route: "Roma - London", status: "Completed" },
    ],
  };

  return (
    <div className="space-y-6">
      <Row type="horizontal" className="flex justify-between items-center">
        <Heading as="h1" className="text-2xl font-bold text-gray-900">
          Driver Profile
        </Heading>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </Row>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-sm">
          <img
            alt={driverData.name}
            className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4 object-cover"
          />
          <h2 className="text-xl font-bold text-gray-800">{driverData.name}</h2>
          <p className="text-sm text-gray-500 mb-3">{driverData.role}</p>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
            {driverData.status}
          </span>

          <div className="w-full border-t border-gray-100 mt-6 pt-4 text-left space-y-3">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
              <p className="text-sm font-medium text-gray-700">{driverData.email}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
              <p className="text-sm font-medium text-gray-700">{driverData.phone}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">License</p>
              <p className="text-sm font-medium text-gray-700">{driverData.license}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-500">Total Distance</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{driverData.stats.totalDistance}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-500">Trips This Month</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{driverData.stats.tripsThisMonth}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-500">Rating</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{driverData.stats.rating}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Assigned Vehicle</h3>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16v-4a1 1 0 00-.325-.738l-3-2.625A1 1 0 0017 8.25V11h-4m8 5H3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{driverData.assignedVehicle}</p>
                  <p className="text-xs text-gray-500">Active duty assignment</p>
                </div>
              </div>
              <span className="text-xs text-blue-600 font-medium hover:underline cursor-pointer">Vehicle Details →</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Trips</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Route</th>
                    <th className="pb-3 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm text-gray-700">
                  {driverData.recentTrips.map((trip) => (
                    <tr key={trip.id} className="hover:bg-gray-50/50 transition">
                      <td className="py-3 font-medium text-gray-500">{trip.date}</td>
                      <td className="py-3 font-semibold text-gray-800">{trip.route}</td>
                      <td className="py-3 text-right">
                        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {trip.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;