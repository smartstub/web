import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoPowerOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import logo from "../../images/Layer.png";
import noti from "../../images/noti icon.png";
import seti from "../../images/settingicon.png";
import user from "../../images/profile_pic.png";
import vector from "../../images/Vector.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Payroll", path: "/payroll" },
    { name: "Earning", path: "/earning" },
    { name: "Calendar", path: "/statement" },
    { name: "Payroll Management", path: "/paystub" },
  ];

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center h-auto bg-[#f3f3f3] px-4 sm:px-6">
      <div className="w-full max-w-screen-xl mx-auto dash_header text-white p-6 sm:p-8 m-2 sm:m-4 rounded-2xl shadow-full">
        <nav className="flex flex-wrap justify-between items-center py-3">
          <img src={logo} alt="Logo" className="w-12 sm:w-16" />
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="text-white focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
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
        {open && (
          <div className="fixed top-0 left-0 w-64 h-full dash_header text-[#fefefe] shadow-lg p-6 z-50 bg-[#1a1a1a]">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <IoMdClose />
            </button>
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
      </div>
    </div>
  );
};

export default Navbar;
