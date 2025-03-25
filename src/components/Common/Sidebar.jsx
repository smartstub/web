import React, { useState, useEffect, useMemo } from "react";
import logo from "../../images/logo.png";
import dashboard_icon from "../../images/dashboard_icon.svg";
import dashboard_icon_active from "../../images/dashboard_icon_white.svg";
import service_icon from "../../images/service_icon.svg";
import service_icon_active from "../../images/service_icon_white.svg";
import order_icon from "../../images/order_icon.svg";
import bulletins_icon from "../../images/bulletins_icon.svg";
import Modal from 'react-modal';
import warranty_icon from "../../images/warranty_icon.svg";
import help_icon from "../../images/help_icon.svg";
import vehicle_icon from "../../images/vehicle_icon.svg";
import settings_icon from "../../images/settings_icon.svg";
import users_icon from "../../images/users_icon.svg";
import email_icon from "../../images/email_icon.svg";
import backup_icon from "../../images/backup_icon.svg";
import { Link, useLocation,NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [activeVehiclelink, setActiveVehiclelink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
const handleVehicleLinkClick = (link) => {
  setActiveVehiclelink(link.toString())
}

// const isVehicleActive = activeVehiclelink === link.id ? "text-gray-200" : "text-gray-600"
  // LINKS TOP
  const linksTop = [
    {
      id: "dashboard",
      text: "Dashboard",
      icon: dashboard_icon,
      activeIcon: dashboard_icon_active,
      goToLink: "/dashboard",
    },
    {
      id: "users    ",
      text: "Users    ",
      icon: email_icon,
      
      activeIcon: email_icon,
      goToLink: "/Settings",
    },
    {
      id: "Support  ",
      text: "Support  ",
      icon: order_icon,
      activeIcon: order_icon,
      goToLink: "/vin",
    },
    
  ];

  
  
  
  // SET ACTIVE STATE ACCORDING TO URL
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = linksTop.find(link => link.goToLink === currentPath);
    setActiveLink(activeItem ? activeItem.id : "");
  }, [location.pathname]); // Only depend on `location.pathname`
  

  return (
    <>
      <div
        className={`
          w-[70%] md:w-[12rem] xl:w-[15rem] 
          bg-white-500 fixed top-0 left-0 bottom-0 
          flex flex-col justify-between overflow-y-auto 
          sidebar z-10 
          ${props.openSidebar ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition
        `}
      >
        {/* TOP PORTION */}
        <div>
          {/* LOGO */}
          <div className="pt-[20px]">
            <img className="mx-auto" src={logo} alt="logo" />
          </div>

          {/* LINKS */}
          <ul className="pt-5 px-4 md:px-3 xl:px-4 space-y-5 flex flex-col items-center w-full">
  {linksTop.map((link) => (
    <li key={link.id} className="w-full flex justify-center">
      <Link
        to={link.goToLink}
        className={`w-[220px] h-[50px] flex items-center gap-3 px-4 rounded-[10px] justify-center ${
          activeLink === link.id ? "bg-gradient text-white" : "text-main"
        }`}
        onClick={() => handleLinkClick(link.id)}
      >
        <img className="w-6 h-6" src={activeLink === link.id ? link.activeIcon : link.icon} alt="icon" />
        <span className="text-f_22_l_15 text-center w-full">{link.text}</span>
      </Link>
    </li>
  ))}
</ul>





          {/* ID */}
         
        </div>

              {/* BOTTOM PORTION */}
            
      </div>

      

      {/* MOBILE CLOSE SIDEBAR OVERLAY */}
      <div
        className={props.openSidebar ? "md:hidden fixed inset-0" : "md:hidden"}
        onClick={() => props.setOpenSidebar(false)}
      ></div>
    </>
  );
}

export default Sidebar;
