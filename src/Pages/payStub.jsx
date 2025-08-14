import React, { useState } from "react";
import logo from "../images/Layer.png";
import noti from "../images/noti icon.png";
import seti from "../images/settingicon.png";
import user from "../images/profile_pic.png";
import vector from "../images/Vector.png";
import Card from "../components/Common/card"
import PayrollCalendarCard from "../components/Common/payRoll"

// import { Card } from "@/components/ui/card";
import { DropdownMenu} from "../components/Common/dropdown";
import { Calendar } from "../components/Common/calender";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPowerOutline } from "react-icons/io5";  
import { IoMdClose } from "react-icons/io";  
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../components/Common/hero"

const Paystub = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { name: "Home", path: "/dashboard" },
    { name: "Payroll", path: "/payroll" },
    { name: "Earning", path: "/earning" },
    { name: "Calendar", path: "/statement" },
    { name: "Payroll Management", path: "/payrollmgmt" },
  ];
  return (
    <>
     <DashboardHeader
  greetingTitle="Pay Stubs"
  greetingSubtitle="Lorem Ipsum is simply dummy text of the printing industry."
/>
    
   <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 p-6 bg-gray-50 min-h-screen">
        {/* Left Section - 60% Width */}
        <div className="col-span-1 lg:col-span-6">
          <div className="w-full p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
            <div className="w-full p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-xl font-semibold text-[#033701] mb-4">Employee Information</h2>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Name:</span> <span className="text-[#033701] font-bold">John Doe</span></p>
        <p><span className="font-semibold">Employee ID:</span> <span className="text-[#033701]">12345688</span></p>
        <p ><span className="font-semibold ">Address:</span> 225 Main Street, Anytown, USA</p>
        <p><span className="font-semibold">Contact Number:</span> 555-123-4567</p>
        <p><span className="font-semibold">Mail:</span> <span className="text-blue-600">john.doe@gmail.com</span></p>
      </div>

      <h2 className="text-xl font-semibold text-[#033701] mt-6 mb-2">Earnings:</h2>
      <p className="text-gray-700"><span className="font-semibold">Gross Earnings:</span> <span className="text-black font-bold">$2,500.00</span></p>
      <p className="text-gray-700"><span className="font-semibold">Net Earnings:</span> <span className="text-black font-bold">$2,000.00</span></p>

      <h2 className="text-xl font-semibold text-[#033701] mt-6 mb-2">Hours Worked:</h2>
      <p className="text-gray-700"><span className="font-semibold">Regular Hours:</span> 80</p>
      <p className="text-gray-700"><span className="font-semibold">Overtime Hours:</span> 10</p>

      <h2 className="text-xl font-semibold text-[#033701] mt-6 mb-2">Pay Rates:</h2>
      <p className="text-gray-700"><span className="font-semibold">Hourly Rate:</span> $25.00</p>
      <p className="text-gray-700"><span className="font-semibold">Overtime Rate:</span> $37.00</p>
    </div>
          </div>
        </div>

        {/* Right Section - 40% Width */}
        <div className="col-span-1 lg:col-span-4">
          <PayrollCalendarCard />
        </div>
      </div>
    

   
    </>
  );
};

export default Paystub;
