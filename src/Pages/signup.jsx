import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import Art from "../images/signupart.png"
import UserForm from "../components/Common/userform"
import { FaUser, FaMapMarkerAlt, FaVenusMars, FaPhone, FaEnvelope, FaCalendar, FaIdCard, FaFileInvoice } from "react-icons/fa";


const SignUp = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

 
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    gender: "",
    phone: "",
    email: "",
    dob: "",
    nationalId: "",
    taxNumber: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  

  return (
    
<div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#fefefe] login_bg px-6 lg:px-0">
  {/* Top Left Logo */}
  <div className="absolute top-5 left-5 p-4 pb-4">
    <img src={logo} alt="Logo" className="w-16 sm:w-20" />
  </div>

  {/* Left Section: Illustration */}
  <div className="w-full lg:w-1/2 flex items-center justify-center sm:mt-4 lg:mt-0">
    <img src={Art} alt="Illustration" className="w-[60%] sm:w-[60%] md:w-[50%] lg:w-[60%] block" />
  </div>

  {/* Right Section: Login Form */}
  <div className="w-full lg:w-1/2 flex flex-col  px-6 ">
    <h2 className="text-2xl sm:text-3xl  justify-center text-center items-center font-extrabold leading-[100%] text-gray-900" style={{ fontFamily: 'Neue Power' }}>
    Setup Profile
    </h2>
    <p className="text-gray-500 mb-4 justify-center text-center items-center text-sm sm:text-base" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
    An Code has been sent to your email
    </p>
    <form  className="max-w-3xl mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* Full Name */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-bold text-[1rem] font-[Poppins]">Full Name</label>
    <div className="flex items-center h-[2rem] rounded-full px-3 py-1 bg-gray-100">
      <FaUser className="text-gray-500 mr-2" />
      <input 
        type="text" name="fullName" placeholder="Name" 
        className="w-full bg-transparent border-none outline-none text-gray-700 text-sm placeholder:text-xs"
        value={formData.fullName} onChange={handleChange}
      />
    </div>
  </div>

  {/* Address */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-bold text-[1rem] font-[Poppins]">Address</label>
    <div className="flex items-center h-[2rem] rounded-full px-3 py-1 bg-gray-100">
      <FaMapMarkerAlt className="text-gray-500 mr-2" />
      <input 
        type="text" name="address" placeholder="Type Address" 
        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder:text-xs"
        value={formData.address} onChange={handleChange}
      />
    </div>
  </div>

  {/* Gender */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-bold text-[1rem] font-[Poppins]">Gender</label>
    <div className="flex items-center h-[2rem] rounded-full px-3 py-1 bg-gray-100">
      <FaVenusMars className="text-gray-500 mr-2" />
      <select 
        name="gender" className="w-full bg-transparent border-none outline-none text-gray-700 text-sm"
        value={formData.gender} onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
  </div>

  {/* Phone Number */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-bold text-[1rem] font-[Poppins]">Phone Number</label>
    <div className="flex items-center h-[2rem] rounded-full px-3 py-1 bg-gray-100">
      <FaPhone className="text-gray-500 mr-2" />
      <input 
        type="tel" name="phone" placeholder="Type Number" 
        className="w-full bg-transparent outline-none border-none text-gray-700 placeholder:text-xs"
        value={formData.phone} onChange={handleChange}
      />
    </div>
  </div>

  {/* Email */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-bold text-[1rem] font-[Poppins]">Email</label>
    <div className="flex items-center h-[2rem] rounded-full px-3 py-1 bg-gray-100">
      <FaEnvelope className="text-gray-500 mr-2" />
      <input 
        type="email" name="email" placeholder="Email" 
        className="w-full bg-transparent outline-none border-none text-gray-700 placeholder:text-xs"
        value={formData.email} onChange={handleChange}
      />
    </div>
  </div>

  {/* Date of Birth */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-bold text-[1rem] font-[Poppins]">DOB</label>
    <div className="flex items-center h-[2rem] rounded-full px-3 py-1 bg-gray-100">
      <FaCalendar className="text-gray-500 mr-2" />
      <input 
        type="text" name="dob" className="w-full bg-transparent border-none outline-none text-gray-700 text-sm"placeholder="Type Your DOB"
        value={formData.dob} onChange={handleChange}
      />
    </div>
  </div>

  {/* National ID */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-bold text-[1rem] font-[Poppins]">National ID</label>
    <div className="flex items-center h-[2rem] rounded-full px-3 py-1 bg-gray-100">
      <FaIdCard className="text-gray-500 mr-2" />
      <input
        type="text"
        name="nationalId"
        placeholder="ID Number"
        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder:text-xs"
        value={formData.nationalId} onChange={handleChange}
      />
    </div>
  </div>

  {/* Tax Holding Number */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-bold text-[1rem] font-[Poppins]">Tax Holding Number</label>
    <div className="flex items-center h-[2rem] rounded-full px-3 py-1 bg-gray-100">
      <FaFileInvoice className="text-gray-500 mr-2" />
      <input 
        type="text" name="taxNumber" placeholder="Type Number" 
        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder:text-xs"
        value={formData.taxNumber} onChange={handleChange}
      />
    </div>
  </div>
</div>


      {/* Submit Button */}
      <div className="mt-4 text-center">
      <button  className="w-full sm:w-[10rem] h-[2rem] bg-[#005100] text-[#fafafa] rounded-full hover:bg-green-700 transition">
        Create Account
      </button>
      </div>
    </form>

    <p className="text-center mt-3 text-gray-600 text-[1rem] font-poppins">
    Already have account?
      <Link to="/" className="text-green-600 hover:underline">
  Login
</Link>
    </p>
    
  </div>
</div>

  );
};

export default SignUp;
