import CommonForm from "@/common/Form";
import { registerFormControls } from "@/config";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialState  = {
  fname:'',
  lname:'',
  phone:'',
  email:'',
  password:'',
  confirmPassword:'',
  Currency:''
}
function AuthRegister() {
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()
  function onSubmit(event){
    event.preventDefault()

  }
  return (
    <div className=" min-h-screen w-340 flex items-center justify-start bg-white">
      <div className="flex w-full   shadow-xl rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 lg:p-40 sm:p-12 bg-[#b4002f] text-white flex flex-col items-center justify-center ">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-black font-extrabold text-4xl">X</span>
            <span className="text-white font-bold text-3xl">CHANGEPAY</span>
            <span className="bg-white text-[#6b0000] font-bold ml-2 px-2 py-1 rounded">
              GLOBAL
            </span>
          </h1>
          <p className="text-xl mb-8">We're Xchangepayglobal.</p>
          <Link to='/auth/login'>
          <button className="border-2 border-white-blue-300  text-white py-4 px-18 mb-4 hover:bg-white hover:text-[#b4002f] transition">
            Sign In
          </button>
          </Link>
         
          <button className="border-2 border-blue-300 text-white py-4 px-18 hover:bg-white hover:text-[#b4002f] transition">
            Sign Up
          </button>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-white lg:p-20 ">
          <div className="flex justify-end space-x-2 mb-6">
          <Link to='/auth/login'> 
          <button
             className="bg-[#b4002f] text-white px-4 py-1 rounded-sm">
              Login
            </button>
          </Link>
            <button
             className="border border-[#b4002f] text-[#b4002f] px-4 py-1 rounded-sm">
              Register
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Login</h2>
          <CommonForm
          formcontrols={registerFormControls}
          buttonText='Register'
          onSubmit={onSubmit}
          formData={formData}
          setFormData={setFormData}
           />
          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-[#b4002f] font-semibold">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}




export default AuthRegister