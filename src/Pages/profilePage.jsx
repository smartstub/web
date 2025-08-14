import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {  Headset, CircleHelp , User, ChevronDown, Menu, X, Power ,LogOut} from "lucide-react";
import logo from "../images/Layer.png";
import noti from "../images/noti icon.png";
import seti from "../images/settingicon.png";
import user from "../images/profile_pic.png";
import vector from "../images/Vector.png";
import Card from "../components/Common/card"
import PayrollCalendarCard from "../components/Common/payRoll"
import UserEditForm from "../components/Common/usereditform"

// import { Card } from "@/components/ui/card";
import { DropdownMenu} from "../components/Common/dropdown";
import { Calendar } from "../components/Common/calender";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPowerOutline } from "react-icons/io5";  
import { IoMdClose } from "react-icons/io";  
import { useNavigate } from "react-router-dom";
import ProfileImagePicker from "../components/Common/profileimagepicker"
const Userprofile = () => {
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

    
   <div className="relative flex flex-col lg:flex-row items-center justify-center h-auto bg-gray-50 px-4 sm:px-6 lg:px-0">
        <div
  className="w-full px-4 sm:px-6 lg:px-8 text-white p-4 sm:p-6 lg:p-8 m-2 sm:m-6 rounded-2xl shadow-2xl"
  style={{
    background: 'linear-gradient(61deg, rgba(3,55,1,1) 25%, rgba(102,155,27,1) 100%, rgba(102,155,27,1) 450%)',
  }}
>
          {/* Navbar */}
          <nav className="flex flex-wrap justify-between items-center py-3">
           
              
                <img src={logo} alt="Logo" className="w-12 sm:w-16" />
              
           

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpen(true)}
                className="text-white focus:outline-none"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Navigation Links */}
           <div className="hidden lg:flex space-x-1">
  {menuItems.map((item, index) => (
    <button
      key={index}
      onClick={() => navigate(item.path)}
      className="text-[#ffff] font-NeuePowerBold py-2 px-4 rounded-lg hover:bg-[#b4e930] transition whitespace-nowrap"
    >
      {item.name}
    </button>
  ))}
</div>



            {/* Search & Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
             
              <button className="bg-lime-400 p-2 rounded-full hover:bg-lime-300 transition-colors"
               onClick={() => navigate("/Help")}>
                <Headset size={20} className="text-gray-900" />
              </button>
              <button
      className="bg-lime-400 p-2 rounded-full hover:bg-lime-300 transition-colors"
      onClick={() => navigate("/Terms")}
    >
      <CircleHelp size={20} className="text-gray-900" />
    </button>
              <button 
                className="w-10 h-10 rounded-full bg-[#ffffff] overflow-hidden hover:ring-2 hover:ring-lime-400 transition-all"
                onClick={() => navigate("/Userprofile")}
              >
                <User size={24} className="text-white m-auto mt-2" />
              </button>
              <div className="relative">
                <button onClick={() => setIsModalOpen(true)} className="hover:bg-gray-700 p-1 rounded transition-colors">
                  <LogOut size={16} className="text-[#ffffff]" />
                </button>

                {/* Logout Modal */}
                {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className=" p-6 rounded-xl shadow-2xl text-white w-80 "
                     style={{
    background: 'linear-gradient(61deg, rgba(3,55,1,1) 25%, rgba(102,155,27,1) 100%, rgba(102,155,27,1) 450%)',
  }}
                    >
                      <p className="text-lg font-semibold text-center mb-6">
                        Are you sure you want to logout?
                      </p>
                      <div className="flex justify-center space-x-4">
                        <button
                          className="bg-lime-400 text-gray-900 px-6 py-2 rounded-full hover:bg-lime-300 transition-colors font-medium"
                          onClick={() => {
                            setIsModalOpen(false);
                            navigate("/");
                          }}
                        >
                          Logout
                        </button>
                        <button
                          className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-500 transition-colors"
                          onClick={() => setIsModalOpen(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Mobile Drawer */}
          {open && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setOpen(false)} />
              <div
  className="fixed top-0 left-0 w-64 h-full text-white shadow-2xl p-6 z-50"
  style={{
    background: 'linear-gradient(61deg, rgba(3,55,1,1) 25%, rgba(102,155,27,1) 100%, rgba(102,155,27,1) 450%)'
  }}
>
  {/* Sidebar content here */}


                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-white hover:bg-gray-700 p-1 rounded"
                >
                  <X size={24} />
                </button>

                <div className="mt-12">
                  <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <button
                          className="block w-full text-[#ffffff] text-left py-3 px-4 rounded-lg hover:bg-lime-400 hover:text-gray-900 transition-all duration-200"
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
              </div>
            </>
          )}

          {/* Greeting Section */}
          <div className="mt-4 p-4 flex flex-col sm:flex-row items-center sm:items-start justify-between sm:gap-6">
  <div className="text-center sm:text-left">
    <h1 className="text-[#ffffff] font-bold text-[1.6rem] sm:text-[1.8rem]" style={{ fontFamily: "Neue Power" }}>
      John Doe
    </h1>
    <p className="text-[#b4e930] text-sm">4140 Parker Rd. Allentown, New Mexico 31134</p>
    <p className="text-[#b4e930] text-sm">(303) 555-0105</p>
  </div>
  <div className="flex items-center sm:items-start mt-4 sm:mt-0 sm:ml-4 sm:mr-[14rem]">
    <ProfileImagePicker />
  </div>
</div>
          
        </div>
      </div>
       <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 p-6 bg-gray-50 min-h-screen">
        {/* Left Section - 60% Width */}
        <div className="col-span-1 lg:col-span-6">
          <div className="w-full p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
             <UserEditForm/>
          </div>
        </div>

        {/* Right Section - 40% Width */}
        <div className="col-span-1 lg:col-span-4">
         
        </div>
      </div>
  

   
    </>
  );
};

export default Userprofile;
