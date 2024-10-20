'use client';

import React from "react";
import { AiFillMessage } from "react-icons/ai";

const ForgetPassword = ({ setOpen }) => {
    const handleSubmit = (e) =>{
      e.preventDefault()
      if(e.target.checkValidity()){
        setOpen(4)
      }
    }
  return (
    <form onSubmit={handleSubmit}   className="w-1/2 flex flex-col gap-3 px-14 mt-12">
    <div>
      <div className="">
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Enter email</h1>
        <p className="text-[16px] font-[500] text-[#000] mt-3">
        Enter your email to reset password
        </p>

        <h1 className="text-[#000] text-[30px] font-[500] mt-8">Password Reset</h1>
        <p className="text-[15px] font-[400] text-[#000]">
        Enter your email to recover your ID
        </p>
      </div>



      <div className="flex flex-col gap-2">
          <label htmlFor="name" className=" text-[14px] font-[500] text-black">
            Email
          </label>
          <div className=" flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className=" text-[#888EA8]">
            <AiFillMessage />
            </span>
            <input
              className=" focus:outline-none focus:border-none"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
      <div className="mt-20 flex flex-col gap-2 relative ">
        <button
         type="submit"
          className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full "
        >
          RECOVER
        </button>
      </div>
    </div>
    </form>
  );
};

export default ForgetPassword;
