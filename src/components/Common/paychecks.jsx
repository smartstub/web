import React from "react";

const paychecks = [
  { date: "Jan. 01 - 2024", paycheckDate: "Jan 01, 2024", amounts: [1000, 850, 1500] },
  { date: "Feb. 04 - 2024", paycheckDate: "Jan 01, 2024", amounts: [1000, 850, 1500] },
  { date: "Mar. 08 - 2024", paycheckDate: "Jan 01, 2024", amounts: [1000, 850, 1500] },
  { date: "Apr. 04 - 2024", paycheckDate: "Jan 01, 2024", amounts: [1000, 850, 1500] },
  { date: "May. 05 - 2024", paycheckDate: "Jan 01, 2024", amounts: [1000, 850, 1500] },
  { date: "Jun. 08 - 2024", paycheckDate: "Jan 01, 2024", amounts: [1000, 850, 1500] },
];

export default function PaycheckGrid() {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl w-full">
        {paychecks.map((paycheck, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full overflow-hidden">
            <div className="flex justify-between items-center">
              <h3 className="text-green-700 font-semibold text-base">PayCheck</h3>
              <p className="text-gray-600 text-sm font-medium">{paycheck.paycheckDate}</p>
            </div>
            <h2 className="text-2xl font-bold text-green-800 mt-1">{paycheck.date}</h2>
            <div className="mt-2 border-t border-gray-300 pt-2 space-y-1 overflow-y-auto max-h-24 pr-2 custom-scrollbar">
              {paycheck.amounts.map((amount, idx) => (
                <p key={idx} className="text-gray-800 font-medium flex justify-between text-base">
                  <span>Amount</span> <span>${amount}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    
  );
}
