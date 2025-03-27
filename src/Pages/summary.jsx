import React, { useState } from "react";
import logo from "../images/Layer.png";
import noti from "../images/noti icon.png";
import seti from "../images/settingicon.png";
import user from "../images/profile_pic.png";
import vector from "../images/Vector.png";
import Card from "../components/Common/card"
import PaycheckGrid from "../components/Common/paychecks"
import PayrollCalendarCard from "../components/Common/payRoll"

// import { Card } from "@/components/ui/card";
import { DropdownMenu} from "../components/Common/dropdown";
import { Calendar } from "../components/Common/calender";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPowerOutline } from "react-icons/io5";  
import { IoMdClose } from "react-icons/io";  
import { useNavigate } from "react-router-dom";

const Summary = () => {
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
    
    <div className="relative flex flex-col lg:flex-row items-center justify-center h-auto bg-[#f3f3f3] px-4 sm:px-6">
  <div className="w-full max-w-screen-xl mx-auto dash_header text-white p-6 sm:p-8 m-2 sm:m-4 rounded-2xl shadow-full">
    {/* Navbar */}
    <nav className="flex flex-wrap justify-between items-center py-3">
      <img src={logo} alt="Logo" className="w-12 sm:w-16" />

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="text-white focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex space-x-3">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-transparent hover:bg-[#b4e930] text-[#ffffff] px-3 py-1 rounded-full transition"
            style={{ fontFamily: "Neue Power" }}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Search & Icons */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 rounded-full text-black w-24 sm:w-32"
        />
        <span className="bg-[#b4e930] p-2 rounded-full">
          <img src={noti} alt="Notification" className="w-5" />
        </span>
        <span className="bg-[#b4e930] p-2 rounded-full">
          <img src={seti} alt="Settings" className="w-5" />
        </span>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden" onClick={() => navigate("/Userprofile")}>
          <img src={user} alt="Profile" />
        </div>
        <div className="relative">
      {/* Dropdown Icon */}
      <img
        src={vector} // Replace with the actual path
        alt="Dropdown"
        className="w-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100  backdrop-blur-lg z-50">
          <div className="modelbg p-6 rounded-lg shadow-lg text-white w-80">
            <p className="text-lg font-bold text-[#fefefe] text-center" style={{ fontFamily: "Neue Power" }}>
              Are you sure you want to logout?
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-[#b4e930] text-[#005100] px-4 py-2 rounded-full hover:bg-green-600 transition"
                onClick={() => {
                  setIsModalOpen(false);
                  navigate("/"); 
                  console.log("User Logged Out"); // Handle logout logic here
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
    </nav>

    {/* Drawer (Sidebar) */}
    {open && (
      <div className="fixed top-0 left-0 w-64 h-full dash_header text-[#fefefe] shadow-lg p-6 z-50 bg-[#1a1a1a]">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          <IoMdClose />
        </button>

        {/* Drawer Content */}
        <ul className="mt-8 space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#b4e930] transition"
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Greeting Section */}
    <div className="mt-4 p-4 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
      <div className="text-center sm:text-left">
        <h1 className="text-[#ffffff] font-bold text-[1.6rem] sm:text-[1.8rem]" style={{ fontFamily: "Neue Power" }}>
        Summary
        </h1>
        <p className="text-[#b4e930] text-sm">
          Lorem Ipsum is simply dummy text of the printing industry.
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <span className="p-2 rounded-full border border-[#ffffff]">
          <IoPowerOutline size={16} className="text-[#ffffff]" />
        </span>
        <div className="flex items-center bg-[#b4e930] text-black px-3 py-1 rounded-full space-x-1">
          <FaRegCalendarAlt size={16} className="text-[#ffffff]" />
          <span className="text-sm text-[#ffffff]">Mon 04, 2025</span>
          <span className="text-md text-[#ffffff]">▼</span>
        </div>
      </div>
    </div>
    <hr className="mx-auto w-[75%] sm:w-[72rem] h-[1px] bg-[00000000] border-0 my-3" />

    
  </div>
</div>
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6 p-8 bg-[#f3f3f3] min-h-screen container mx-auto">
  {/* Left Section - 60% Width */}
  <div className="col-span-1 md:col-span-6">
    <div className="w-full p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
    <PaycheckGrid/>
    </div>
  </div>

  {/* Right Section - 40% Width */}
  <div className="col-span-1 md:col-span-4">
  <PayrollCalendarCard/>
  </div>
</div>

   
    </>
  );
};

export default Summary;
