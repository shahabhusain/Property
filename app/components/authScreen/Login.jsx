"use client";

import React from "react";
import { FaLock } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Login = ({ setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      console.log("Form is valid!");
    } else {
      console.log("Form is not valid!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-3 mt-12 mx-14">
      <div className="">
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Sign In</h1>
        <p className="text-[16px] font-[500] text-[#000] mt-3">
          Enter your email and password to login
        </p>
      </div>

     <div className=" flex flex-col gap-6 mt-4">
     <div className="flex flex-col gap-2">
          <label htmlFor="name" className=" text-[14px] font-[500] text-black">
            Email
          </label>
          <div className=" flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className=" text-[#888EA8]">
              <IoMdPerson />
            </span>
            <input
              className=" focus:outline-none focus:border-none"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className=" text-[14px] font-[500] text-black">
            Password
          </label>
          <div className=" flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className=" text-[#888EA8]">
              <FaLock />
            </span>
            <input
              className=" focus:outline-none focus:border-none"
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="h-[20px] w-[20px]  border border-gray-300 rounded-sm checked:bg-blue-500"
            type="checkbox"
            required
          />

          <label
            htmlFor="terms"
            className="text-[15px] font-[600] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Subscribe to weekly newsletter
          </label>
        </div>
     </div>

      <div className="mt-20 flex flex-col gap-3 ">
        <button
          type="submit"
          className=" flex flex-col gap-2 relative"
        >
          <span className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full">Sign In</span>
          <p onClick={() => setOpen(3)} className=" cursor-pointer absolute top-14 right-0 text-[14px] font-[700]">
          Forget Password
        </p>
        </button>
       
        <h1 className="text-[14px] font-[400] flex  gap-2 items-center justify-center mt-8">
          Don not have an account?{" "}
          <button onClick={() => setOpen(0)} className="underline text-[#AE8E50]">
            SIGN UP
          </button>
        </h1>
      </div>
    </form>
  );
};

export default Login;
