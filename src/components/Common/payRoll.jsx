import { useState } from "react";
import { ChevronDown } from "lucide-react";


const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const PayrollCalendarCard = () => {
  const [selectedMonth, setSelectedMonth] = useState("May");

  return (
    <div className="p-6 shadow-lg rounded-xl bg-white">
      {/* Header with Title & Dropdown */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-NeuePowerBold text-[#033701]">Payroll Calendar</h3>
        <div className="relative">
          <select
            className="flex items-center gap-2 px-4 py-2 border border-[#b4e930] text-[#033701] rounded-full text-sm"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <div className="grid grid-cols-7 text-center text-gray-600 font-semibold">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="p-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mt-2">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
            <div
              key={date}
              className={`p-2 rounded-lg ${date === 7 ? "bg-[#b4e930] text-[#033701] font-bold" : "text-gray-700"}`}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* Payroll Details */}
      <div className="flex flex-col sm:flex-row gap-x-6">
  <div className="flex flex-col">
    <span className="text-lg font-bold">09:15am</span>
    <span className="text-gray-500 text-sm">1hr 10 min</span>
  </div>
  <div className="flex flex-col">
    <span className="text-[#033701] font-bold">John Wick</span>
    <span className="text-gray-400 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  </div>
</div>


        {/* Payroll Table */}
        <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
          <div className="grid grid-cols-3 font-bold text-gray-600 pb-2 border-b">
            <p>S/N</p>
            <p>Payroll No.</p>
            <p>Amount</p>
          </div>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="grid grid-cols-3 py-2 border-b text-gray-700">
              <p>0{index}</p>
              <p>00211235</p>
              <p>$1,400</p>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default PayrollCalendarCard;
