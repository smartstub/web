import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from "recharts";
import { ChevronDown } from "lucide-react";
const data = [
  { month: "Jan", value: 30, percentage: "9.1%" },
  { month: "Feb", value: 40, percentage: "12.1%" },
  { month: "Mar", value: 50, percentage: "15.2%" },
  { month: "Apr", value: 80, percentage: "24.3%" },
  { month: "May", value: 90, percentage: "27.3%" },
  { month: "Jun", value: 55, percentage: "16.7%" },
  { month: "Jul", value: 70, percentage: "21.2%" },
  { month: "Aug", value: 100, percentage: "30.3%" },
];

const months = data.map((item) => item.month);

const CustomBarChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  return (
    <div className="h-full w-full flex flex-col">
  <div className="flex justify-between items-center mb-2">
    <div>
      <p className="text-sm text-gray-500">Month</p>
      <h2 className="text-xl font-bold text-[#033701]">{selectedMonth}, 04 - 2025</h2>
    </div>
   
    <select
      className="flex items-center gap-2 px-4 py-2 border border-[#b4e930] text-[#033701] rounded-full text-sm"
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
    >
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  </div>

  {/* Ensure full width & height */}
  <div className="flex-1 w-full ">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 40, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" tick={{ fill: "#064e3b", fontWeight: "bold", fontSize: 12 }} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="url(#gradient)" barSize={15}>
          <LabelList dataKey="percentage" position="top" fill="#064e3b" fontWeight="bold" fontSize={12} />
        </Bar>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#064e3b" stopOpacity={1} />
            <stop offset="100%" stopColor="#064e3b" stopOpacity={0.2} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

  );
};

export default CustomBarChart;
