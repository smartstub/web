import React, { useState } from "react";
import logo from "../images/Layer.png";
import noti from "../images/noti icon.png";
import seti from "../images/settingicon.png";
import user from "../images/profile_pic.png";
import vector from "../images/Vector.png";
import Card from "../components/Common/card"
import PayrollCalendarCard from "../components/Common/payRoll"
import PayrolluserForm from "../components/Common/payrolluser"

// import { Card } from "@/components/ui/card";
import { DropdownMenu} from "../components/Common/dropdown";
import { Calendar } from "../components/Common/calender";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPowerOutline } from "react-icons/io5";  
import { IoMdClose } from "react-icons/io";  
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../components/Common/hero"

const Stripe = () => {
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
  greetingTitle="Payroll Mangement"
  greetingSubtitle="Lorem Ipsum is simply dummy text of the printing industry."
/>
   <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 p-6 bg-gray-50 min-h-screen">
        {/* Left Section - 60% Width */}
        <div className="col-span-1 lg:col-span-6">
          <div className="w-full p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
            <div className="">
      <div className="">
         <h2 className="text-xl font-semibold text-gray-800 mb-2">Amount</h2>

        {/* Amount Value */}
        <p className="text-4xl font-extrabold text-green-800 mb-6">$500.00</p>

        {/* Card Info Box */}
        <div className="bg-gray-100 rounded-xl shadow-sm p-4 flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <span className="text-indigo-500 font-bold bg-white px-2 py-1 rounded shadow text-sm">
              stripe
            </span>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-800">Stripe</p>
              <p className="text-xs text-gray-500">Debit Card ••••98002</p>
            </div>
          </div>
        </div>

        {/* Add Card Button */}
         <button className="bg-green-800 hover:bg-green-900 text-[#f9fafb] text-sm font-semibold py-2 px-6 rounded-full transition">
          Continue
        </button>
      </div>
    </div>
          </div>
        </div>

        {/* Right Section - 40% Width */}
        <div className="col-span-1 lg:col-span-4">
        
    </div>
        </div>
      
  

   
    </>
  );
};

export default Stripe;
