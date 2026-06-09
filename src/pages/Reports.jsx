import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Reports() {
  const reportStats = {
    generatedDate: "2026-06-09",
    summary: {
      totalDistance: "148,250 km",
      fuelConsumed: "4,620 l",
      activeVehicles: "18 / 20",
      totalExpenses: "$12,450.00",
    },
    monthlyHighlights: [
      { id: 1, month: "May 2026", efficiency: "94%", fuelCost: "$3,850", status: "Optimal" },
      { id: 2, month: "April 2026", efficiency: "91%", fuelCost: "$4,120", status: "Optimal" },
      { id: 3, month: "March 2026", efficiency: "88%", fuelCost: "$4,480", status: "Review Needed" },
    ],
  };

  return (
    <div className="space-y-6">
      <Row type="horizontal" className="flex justify-between items-center">
        <div>
          <Heading as="h1">Fleet Reports</Heading>
          <p className="text-xs text-gray-400 mt-1">Last updated: {reportStats.generatedDate}</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            Export CSV
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Generate New Report
          </button>
        </div>
      </Row>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-medium">Total Distance</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{reportStats.summary.totalDistance}</p>
          <span className="text-xs text-green-600 font-medium mt-1 inline-block">↑ 4.2% vs last month</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-medium">Fuel Consumed</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{reportStats.summary.fuelConsumed}</p>
          <span className="text-xs text-green-600 font-medium mt-1 inline-block">↓ 1.8% efficiency increase</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-medium">Active Fleet Utilization</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{reportStats.summary.activeVehicles}</p>
          <span className="text-xs text-gray-400 mt-1 inline-block">2 units in maintenance</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-medium">Total Expenses</p>
          <p className="text-2xl font-bold text-gray-950 mt-2">{reportStats.summary.totalExpenses}</p>
          <span className="text-xs text-red-600 font-medium mt-1 inline-block">↑ 2.5% insurance adjustment</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Monthly Performance Overview</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
                <th className="p-4 font-medium">Month</th>
                <th className="p-4 font-medium">Fleet Efficiency</th>
                <th className="p-4 font-medium">Total Fuel Cost</th>
                <th className="p-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {reportStats.monthlyHighlights.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition">
                  <td className="p-4 font-semibold text-gray-900">{row.month}</td>
                  <td className="p-4 text-gray-600 font-medium">{row.efficiency}</td>
                  <td className="p-4 text-gray-600">{row.fuelCost}</td>
                  <td className="p-4 text-right">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                      row.status === "Optimal" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {row.status}
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

export default Reports;