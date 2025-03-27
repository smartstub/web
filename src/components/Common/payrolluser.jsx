import { Pencil } from "lucide-react"; // Correct Edit Icon

export default function PayrolluserForm() {
  return (
  
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Input Fields */}
          {[
            { label: "Employee ID", id: "employee_id" },
            { label: "Pay Period", id: "pay_period" },
            { label: "Pay Date", id: "pay_date" },
            { label: "Total Working Hours", id: "total_working_hours" },
            { label: "Overtime Hours", id: "overtime_hours" },
            { label: "Hourly Wages", id: "hourly_wages" },
            { label: "Gross Pay", id: "gross_pay" },
            { label: "Deductions", id: "deductions" },
            { label: "Net Pay", id: "net_pay" },
            { label: "Commission", id: "commission" },
            { label: "Bonus", id: "bonus" },
            { label: "Next Payroll Date", id: "next_payroll_date" },
          ].map((field) => (
            <div key={field.id} className="relative">
              <label className="text-gray-700 font-medium">{field.label}:</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  id={field.id}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <Pencil
                  onClick={() => document.getElementById(field.id)?.focus()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-700 cursor-pointer w-5 h-5"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex justify-start mt-6">
          <button className="bg-green-700 text-[#fefefe] font-semibold py-2 px-8 rounded-full shadow-md hover:bg-green-800 transition">
            Continue
          </button>
        </div>
      </div>
    
  );
}
