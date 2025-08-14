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

const Payrollmgmtfeature = () => {
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


  const handleClick = () => {
    navigate("/stripe");
  };
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
        <h2 className="text-lg font-semibold text-black mb-1">Plan</h2>
        <p className="text-3xl font-NeuePowerBold text-green-800 mb-6">$500</p>

        <div className="space-y-3 mb-6">
          {["Feature One", "Feature Two", "Feature Three"].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-100 text-gray-500 py-2 px-4 rounded-lg text-sm font-medium"
            >
              {feature}
            </div>
          ))}
        </div>

        <button  onClick={handleClick}  className="bg-green-800 hover:bg-green-900 text-[#f9fafb] text-sm font-semibold py-2 px-6 rounded-full transition">
          Choose Plan
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

export default Payrollmgmtfeature;
