import { useState } from "react";
import { Search, Filter } from "lucide-react";

const transactions = [
  { amount: 300, type: "credit" },
  { amount: 300, type: "debit" },
  { amount: 800, type: "credit" },
  { amount: 120, type: "debit" },
  { amount: 150, type: "debit" },
  { amount: 250, type: "debit" },
  { amount: 500, type: "credit" },
];

export default function SelectTenure() {
  return (
    <div className="">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-2 border rounded-lg p-2 mb-4 bg-gray-100">
          <Search className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Select Tenure"
            className="w-full bg-transparent focus:outline-none"
          />
          <Filter className="text-gray-600" size={20} />
        </div>
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {transactions.map((txn, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-bold">${txn.amount}</span>
                <span
                  className={`px-4 py-1 text-sm font-medium rounded-full border ${
                    txn.type === "credit"
                      ? "text-green-600 border-green-600 bg-green-100"
                      : "text-red-600 border-red-600 bg-red-100"
                  }`}
                >
                  {txn.type === "credit" ? "credit" : "Debit"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
