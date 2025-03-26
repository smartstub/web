import React from "react";

const PayrollSummary = () => {
  const payrollData = [
    { month: "May", year: 2025, total: "$700" },
    { month: "Apr", year: 2025, total: "$1700" },
    { month: "Mar", year: 2025, total: "$1000" },
    { month: "Feb", year: 2025, total: "$800" },
    { month: "Jan", year: 2025, total: "$300" },
  ];

  return (
    <div className="bg-green-50 min-h-screen p-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl overflow-auto">
        {payrollData.map((item, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <h2 className="text-green-700 font-bold text-lg">
              {item.month} {item.year}
            </h2>
            <div className="mt-2 text-xl font-bold text-green-700">
              Total: {item.total}
            </div>
            <p className="text-gray-600 text-sm mt-1">{item.month} 21</p>
            <div className="mt-2 text-sm text-gray-700">
              <p>Total Hours: 160hrs</p>
              <p>Overtime Hours: 160hrs</p>
              <p>Bonus: 160hrs</p>
              <p>Commission: 160hrs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayrollSummary;