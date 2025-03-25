import React, { useState } from "react";
import logo from "../images/logo.png"
import Art from "../images/verifyscreenart.png"
import { useNavigate } from "react-router-dom";
const VerifyComponent = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
    setError("");
  };
  const handleSubmilogin = () => {
    
    navigate("/dashboard");
  
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError("Verification code must be 6 digits.");
      return;
    }
    console.log("Verification Code Submitted:", code);
    // Add your verification API call here
  };

  return (
    
<div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#fefefe] login_bg px-6 lg:px-0">
  {/* Top Left Logo */}
  <div className="absolute top-5 left-5 p-4 pb-4">
    <img src={logo} alt="Logo" className="w-16 sm:w-20" />
  </div>

  {/* Left Section: Illustration */}
  <div className="w-full lg:w-1/2 flex items-center justify-center sm:mt-4 lg:mt-0">
    <img src={Art} alt="Illustration" className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[60%] block" />
  </div>

  {/* Right Section: Login Form */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 text-center">
    <h2 className="text-2xl sm:text-3xl font-extrabold leading-[100%] text-gray-900" style={{ fontFamily: 'Neue Power' }}>
    Verification code
    </h2>
    <p className="text-gray-500 mb-4 text-sm sm:text-base" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
    An Code has been sent to your email
    </p>

    <form className="pt-6 w-full max-w-[22rem]">
      <div className="mb-3 text-left">
        <input 
          type="code" 
          placeholder="Code" 
          className="bg-[#fafafa] text-gray-900 text-sm rounded-full focus:ring-blue-500 block w-full h-[2.5rem] p-2.5 border-0 placeholder:text-[#737373]"
        />
      </div>

      

      <button  className="w-full sm:w-[10rem] h-[2rem] bg-[#005100] text-[#fafafa] rounded-full hover:bg-green-700 transition"  onClick={handleSubmilogin}>
        Send
      </button>
    </form>

    
  </div>
</div>

  );
};

export default VerifyComponent;
