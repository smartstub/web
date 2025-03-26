import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { name: "Over Time", value: 46, color: "#C3E962" },
  { name: "Bonuses", value: 30, color: "#B4F541" },
  { name: "Deductions", value: 20, color: "#247B30" },
  { name: "Credit", value: 20, color: "#094C0A" },
];

const TaxManagementChart = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-[#033701]">Tax Management</h2>
          <p className="text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Dropdown */}
        <button className="flex items-center gap-2 px-4 py-2 border border-[#b4e930] text-[#033701] rounded-full text-sm">
          Month <ChevronDown size={16} />
        </button>
      </div>

      {/* Chart & Legend Section */}
      <div className="flex items-center gap-6">
        {/* Pie Chart */}
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#82ca9d"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Legend */}
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <p className="text-sm font-medium text-gray-700">
                {item.name} <span className="font-bold">{item.value}%</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxManagementChart;
