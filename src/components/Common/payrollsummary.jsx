import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PayrollSummary = () => {
  const payrollData = [
    { month: "May", year: 2025, total: "$700" },
    { month: "Apr", year: 2025, total: "$1700" },
    { month: "Mar", year: 2025, total: "$1000" },
    { month: "Feb", year: 2025, total: "$800" },
    { month: "Jan", year: 2025, total: "$300" },
  ];

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="shadow-lg rounded-xl p-6 w-full max-w-3xl overflow-auto">
        <div className="space-y-6">
          {payrollData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-sm p-4">
              {/* Calendar Section */}
              <div className="flex-1 flex flex-col items-center border-r md:pr-6">
                <div className="flex items-center space-x-4 text-green-700 font-bold text-lg">
                  <FaChevronLeft />
                  <span>{item.month} {item.year}</span>
                  <FaChevronRight />
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-gray-600 text-sm mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <span key={i} className="font-semibold">{day}</span>
                  ))}
                  {[...Array(30)].map((_, i) => (
                    <span key={i} className="p-1 rounded-md hover:bg-green-200 cursor-pointer">{i + 1}</span>
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div className="flex-1 md:pl-6 mt-4 md:mt-0">
                <h2 className="text-green-700 font-bold text-2xl">Total: {item.total}</h2>
                <p className="text-gray-700 font-bold mt-1">{item.month} 21</p>
                <div className="mt-2 text-sm text-gray-700 grid grid-cols-2 gap-2">
                  <p>Total Hours: <span className="text-green-700 font-bold">160hrs</span></p>
                  <p>Bonus: <span className="text-green-700 font-bold">160hrs</span></p>
                  <p>Overtime Hours: <span className="text-green-700 font-bold">160hrs</span></p>
                  <p>Commission: <span className="text-green-700 font-bold">160hrs</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayrollSummary;