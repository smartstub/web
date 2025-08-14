import React, { useState } from "react";
import logo from "../images/Layer.png";
import noti from "../images/noti icon.png";
import seti from "../images/settingicon.png";
import user from "../images/profile_pic.png";
import vector from "../images/Vector.png";
import Card from "../components/Common/card"
import PayrollCalendarCard from "../components/Common/payRoll"
import DocumentGrid from "../components/Common/taxlistview"
import DashboardHeader from "../components/Common/hero"

// import { Card } from "@/components/ui/card";
import { DropdownMenu} from "../components/Common/dropdown";
import { Calendar } from "../components/Common/calender";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPowerOutline } from "react-icons/io5";  
import { IoMdClose } from "react-icons/io";  
import { useNavigate } from "react-router-dom";
import EmployeeTaxReport from "../components/Common/taxmgmtrecord"

const Taxmgmt = () => {
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
  greetingTitle="Tax Management"
  greetingSubtitle="Lorem Ipsum is simply dummy text of the printing industry."
/>
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 p-6 bg-gray-50 min-h-screen">
        {/* Left Section - 60% Width */}
        <div className="col-span-1 lg:col-span-6">
          <div className="w-full p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
            <EmployeeTaxReport/>
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

export default Taxmgmt;
