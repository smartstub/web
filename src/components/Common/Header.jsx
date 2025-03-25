import React from "react";
import { FaUserCircle, FaSearch, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-500 text-white p-6 rounded-lg flex justify-between items-center shadow-lg">
      {/* Left - Logo and Navigation */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">Smart Stub</div>
        <nav className="flex space-x-6">
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">Home</button>
          <a href="#" className="hover:text-gray-300">Payroll</a>
          <a href="#" className="hover:text-gray-300">Earning</a>
          <a href="#" className="hover:text-gray-300">Calendar</a>
          <a href="#" className="hover:text-gray-300">Payroll Management</a>
        </nav>
      </div>

      {/* Right - Search, Icons, and Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-full text-black pl-10 w-64"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-600" />
        </div>
        <FaBell className="text-white text-xl cursor-pointer" />
        <FaCog className="text-white text-xl cursor-pointer" />
        <FaSignOutAlt className="text-white text-xl cursor-pointer" />
        <FaUserCircle className="text-white text-3xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;