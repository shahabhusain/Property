"use client";

import React from "react";
import { IoCardOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
const SignUpForm = ({ setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setOpen(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-3 px-16 mt-12">
      <div>
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Sign Up</h1>
        <p className="text-[16px] font-[400] text-[#000] mt-3">
          Enter your email and password to register
        </p>
      </div>
      <div className=" flex flex-col gap-6 mt-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className=" text-[14px] font-[500] text-black">
            Name
          </label>
          <div className=" flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className=" text-[#888EA8]">
              <IoCardOutline />
            </span>
            <input
              className=" focus:outline-none focus:border-none"
              type="name"
              placeholder="Enter Name"
              required
            />
          </div>
        </div>
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
            className="h-[20px] w-[20px] border-none outline-none rounded-sm"
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
      <div className=" mt-8 flex flex-col gap-2">
        <button
          type="submit"
          className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
        >
          Sign Up
        </button>
        <h1 className="text-[14px] font-[400] text-center mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setOpen(2)}
            className="underline text-[#AE8E50]"
          >
            SIGN IN
          </button>
        </h1>
      </div>
    </form>
  );
};

export default SignUpForm;
