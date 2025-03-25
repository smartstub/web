import React, { useState } from "react";
import logo from "../images/Layer.png";
import noti from "../images/noti icon.png";
import seti from "../images/settingicon.png";
import user from "../images/profile_pic.png";
import vector from "../images/Vector.png";
import Card from "../components/Common/card"

// import { Card } from "@/components/ui/card";
import { DropdownMenu} from "../components/Common/dropdown";
import { Calendar } from "../components/Common/calender";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPowerOutline } from "react-icons/io5";  
import { IoMdClose } from "react-icons/io";  

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    
    <div className="relative flex flex-col lg:flex-row items-center justify-start h-auto bg-[#f3f3f3] px-4 sm:px-6">
      <div className="w-full dash_header text-white p-6 sm:p-8 m-2 sm:m-4 rounded-2xl shadow-full">
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
            {["Home", "Payroll", "Earning", "Calendar", "Payroll Management"].map((text, index) => (
              <button
                key={index}
                className="bg-transparent hover:bg-[#b4e930] text-[#ffffff] px-3 py-1 rounded-full transition"
                style={{ fontFamily: "Neue Power" }}
              >
                {text}
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
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img src={user} alt="Profile" />
            </div>
            <img src={vector} alt="Dropdown" className="w-4" />
          </div>
        </nav>

        {/* Drawer (Sidebar) */}
        {open && (
          <div className="fixed top-0 left-0 w-64 h-full dash_header text-[#fefefe] shadow-lg p-6 z-50">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <IoMdClose />
            </button>

            {/* Drawer Content */}
            <ul className="mt-8 space-y-4">
              {["Home", "Payroll", "Earning", "Calendar", "Payroll Management"].map((text, index) => (
                <li key={index}>
                  <button
                    className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#b4e930] transition"
                    onClick={() => setOpen(false)}
                  >
                    {text}
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
              Good Morning, Edward!
            </h1>
            <p className="text-[#b4e930] text-sm">Lorem Ipsum is simply dummy text of the printing industry.</p>
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

        <hr className="mx-auto w-[75%] sm:w-[72rem] h-[1px] bg-[#b4e930] border-0 my-3" />

        {/* Dashboard Cards */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "📄", title: "Pay Stubs" },
            { icon: "📑", title: "Tax Form" },
            { icon: "📂", title: "Statements" },
            { icon: "📖", title: "Summaries" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2 bg-none p-3 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-xs">Lorem ipsum is simply dummy text</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6 p-6 bg-[#f3f3f3] min-h-screen ">
      {/* First Part - 70% Width */}
      <div className="col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chart Card */}
       
        <div className="col-span-2 p-6 shadow-xl rounded-xl bg-white">
          <h2 className="text-2xl font-bold text-green-800">May, 04 - 2025</h2>
          <div className="mt-4">[Chart Component Here]</div>
        </div>

        {/* Right Side - Tax Management (Top) & Average (Bottom) */}
        <div className="flex flex-col gap-6">
          {/* Tax Management Card */}
          <div className="p-6 shadow-lg rounded-xl bg-white text-center">
            <h3 className="text-lg font-semibold text-gray-600">Total</h3>
            <p className="text-3xl font-bold text-green-800">4,287</p>
          </div>
          
          {/* Average Card */}
          <div className="p-6 shadow-lg rounded-xl bg-white text-center">
            <h3 className="text-lg font-semibold text-gray-600">Average</h3>
            <p className="text-3xl font-bold text-green-800">4,287</p>
          </div>
        </div>

        {/* Tax Management Card */}
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h3 className="text-xl font-bold text-green-800">Tax Management</h3>
          <div className="mt-4">[Pie Chart Component Here]</div>
        </div>

        {/* Budget History Card */}
        <div className="col-span-2 p-6 shadow-lg rounded-xl bg-white">
          <h3 className="text-xl font-bold text-green-800">Budget History</h3>
          <div className="mt-4">[Table Component Here]</div>
        </div>

        {/* Payroll Calendar Card */}
       
      </div>

      {/* Second Part - 30% Width */}
      <div className="col-span-3 grid gap-6">
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h3 className="text-xl font-bold text-green-800">Payroll Calendar Card</h3>
          <div className="mt-4">[Content Here]</div>
        </div>
      
      </div>
    </div>
   
    </>
  );
};

export default Dashboard;
