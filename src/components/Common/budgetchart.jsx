import { useState } from "react";
import { ChevronDown } from "lucide-react";

const BudgetHistory = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Month");

  const data = [
    { id: "01", budgetNo: "00211235", amount: "$1,400", date: "25/10/2025" },
    { id: "02", budgetNo: "00211235", amount: "$1,400", date: "25/10/2025" },
    { id: "03", budgetNo: "00211235", amount: "$1,400", date: "25/10/2025" },
    { id: "04", budgetNo: "00211235", amount: "$1,400", date: "25/10/2025" },
    { id: "05", budgetNo: "00211235", amount: "$1,400", date: "25/10/2025" },
    { id: "06", budgetNo: "00211235", amount: "$1,400", date: "25/10/2025" },
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl  font-NeuePowerBold text-[#033701]">Budget History</h3>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#b4e930] text-[#033701] rounded-full text-sm">
          Month <ChevronDown size={16} />
        </button>
      
        {/* <select
          className="border border-green-600 text-[#033701] px-3 py-1 rounded-lg text-sm"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option value="Month">Month</option>
          <option value="Quarter">Quarter</option>
          <option value="Year">Year</option>
        </select> */}
      </div>

      {/* Subtext */}
      <p className="text-gray-500 text-sm mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* Table */}
      <div className="mt-4 p-2 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="p-1">S/N</th>
              <th className="p-1">Budget No.</th>
              <th className="p-1">Budgeted Amount.</th>
              <th className="p-1">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-1">{item.id}</td>
                <td className="p-1">{item.budgetNo}</td>
                <td className="p-1">{item.amount}</td>
                <td className="p-1">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetHistory;
