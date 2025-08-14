import React from "react";

const EmployeeTaxReport = () => {
  return (
    
      <div className="">
        {/* Employee Information */}
        <div>
          <h2 className="text-green-800 text-xl font-bold">Employee Information</h2>
          <p><span className="font-semibold">Name:</span> <span className="font-bold">John Doe</span></p>
          <p><span className="font-semibold">Employee ID:</span> <span className="text-green-800">12345688</span></p>
          <p><span className="font-semibold">Address:</span> <span className="text-green-800">225 Main Street, Anytown, USA</span></p>
          <p><span className="font-semibold">Contact Number:</span> <span className="text-green-800">555-123-4567</span></p>
          <p><span className="font-semibold">Mail:</span> <span className="text-green-800">John.doe@gmail.com</span></p>
        </div>
        
        <hr className="my-6 border-t-2" />
        
        {/* Tax Withholding */}
        <div>
          <h2 className="text-green-800 text-xl font-bold">Tax Withholding:</h2>
          <ul className="mt-2 space-y-1">
            <li className="flex justify-between"><span>Federal Tax Withheld</span> <span className="text-green-800 font-bold">$1000</span></li>
            <li className="flex justify-between"><span>State Tax Withheld</span> <span className="text-green-800 font-bold">$850</span></li>
            <li className="flex justify-between"><span>Social Security Tax Withheld</span> <span className="text-green-800 font-bold">$1500</span></li>
            <li className="flex justify-between"><span>Medicare Tax Withheld</span> <span className="text-green-800 font-bold">$1500</span></li>
            <li className="flex justify-between"><span>Other Taxes Withheld</span> <span className="text-green-800 font-bold">$1500</span></li>
          </ul>
        </div>
        
        {/* Credits and Deductions */}
        <div className="bg-gray-100 p-4 rounded-lg mt-6">
          <h3 className="text-green-800 font-bold">Credits and Deductions:</h3>
          <p className="text-gray-600">List of credits and deductions</p>
        </div>
        
        {/* Summary */}
        <div className="flex justify-between mt-6">
          <button className="bg-[#005100] text-[#fefefe] px-6 py-2 rounded-full">Total Taxes Paid: $1200</button>
          <button className="bg-[#005100] text-[#fefefe] px-6 py-2 rounded-full">Total Refund/Due: $1200</button>
        </div>
      </div>
    
  );
};

export default EmployeeTaxReport;
