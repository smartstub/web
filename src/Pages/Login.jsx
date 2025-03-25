import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { userActions } from "../state/actions";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import Art from "../images/loginpageart.png"

function Login({ signInRequest, user }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitverify = () => {
    
      navigate("/verify");
    
  };
  const handleSubmitsignup = () => {
    
    navigate("/SignUp");
  
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    const user = { email, password };
    signInRequest({ user: user, navigate: navigate });
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
      Welcome!
    </h2>
    <p className="text-gray-500 mb-4 text-sm sm:text-base" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
      Login to continue
    </p>

    <form className="pt-6 w-full max-w-[22rem]">
      <div className="mb-3 text-left">
        <input 
          type="email" 
          placeholder="Email" 
          className="bg-[#fafafa] text-gray-900 text-sm rounded-full focus:ring-blue-500 block w-full h-[2.5rem] p-2.5 border-0 placeholder:text-[#737373]"
        />
      </div>

      <div className="mb-3 text-left">
        <input 
          type="password" 
          placeholder="Password" 
          className="bg-[#fafafa] text-gray-900 text-sm rounded-full focus:ring-blue-500 block w-full h-[2.5rem] p-2.5 border-0 placeholder:text-[#737373]"
        />
        <div className="flex justify-end mt-2">
          <a href="#" className="text-xs text-green-600 hover:underline">Password reset</a>
        </div>
      </div>

      <button  onClick={handleSubmitverify} className="w-full sm:w-[10rem] h-[2rem] bg-[#005100] text-[#fafafa] rounded-full hover:bg-green-700 transition">
        Login
      </button>
    </form>

    <hr className="w-full sm:w-[16rem] h-[1px] bg-[#d0d0d0] border-0 my-3" />
    <div className="text-center my-2 text-gray-500">or</div>
    <div className="flex flex-col items-center gap-4 w-full max-w-[30rem] mx-auto px-4">
  {/* Google & Facebook Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 w-full">
    {/* Google Button */}
    <button className="flex items-center justify-center w-full sm:w-[12rem] h-[2rem] px-3 bg-[#f5f5f5] text-gray-700 text-xs sm:text-sm font-medium rounded-full border border-gray-300 shadow-sm hover:bg-gray-200 transition">
      <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" 
           alt="Google" 
           className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
      <span>Google</span>
    </button>

    {/* Facebook Button */}
    <button className="flex items-center justify-center w-full sm:w-[12rem] h-[2rem] px-3 bg-[#f5f5f5] text-gray-700 text-xs sm:text-sm font-medium rounded-full border border-gray-300 shadow-sm hover:bg-gray-200 transition">
      <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" 
           alt="Facebook" 
           className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
      <span>Facebook</span>
    </button>
  </div>

  {/* Apple Button */}
  <button className="flex items-center justify-center w-full sm:w-[14rem] h-[2rem] px-3 bg-[#f5f5f5] text-gray-700 text-xs sm:text-sm font-medium rounded-full border border-gray-300 shadow-sm hover:bg-gray-200 transition">
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" viewBox="0 0 14 17" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M11.977 8.295c-.015-1.527 1.246-2.263 1.3-2.295-.714-1.045-1.823-1.188-2.217-1.205-.945-.097-1.841.557-2.32.557-.478 0-1.214-.544-1.994-.53-1.026.016-1.972.596-2.502 1.505-1.073 1.81-.273 4.492.774 5.961.514.72 1.13 1.537 1.926 1.505.77-.032 1.061-.487 1.99-.487.929 0 1.182.487 1.994.471.827-.016 1.347-.725 1.86-1.45.584-.846.82-1.675.836-1.717-.019-.009-1.6-.613-1.618-2.43zM9.646 2.859c.426-.528.713-1.267.633-2.009-.612.023-1.38.419-1.827.947-.401.468-.752 1.212-.657 1.923.697.053 1.425-.36 1.85-.86z"/>
    </svg>
    <span>Apple ID</span>
  </button>
</div>


    <p className="text-center mt-3 text-gray-600 text-xs font-poppins">
      Don't have an account? 
      <Link to="/signup" className="text-green-600 hover:underline">
  Create account
</Link>
    </p>
  </div>
</div>

  );
}

const mapStateToProps = (state) => ({
  user: state,
});

const mapDispatchToProps = {
  signInRequest: userActions.signInRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "Login" })(Login));