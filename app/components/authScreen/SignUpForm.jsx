"use client";

import React, { useEffect, useState } from "react";
import { IoCardOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import axios from "axios";

const SignUpForm = ({ setOpen }) => {
  const [signUpData, setSignUpData] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [error, setError] = useState(null); // State for error handling
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;

    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/auth/register`,
        {
          userName,
          email,
          password,
          subscribe,
        }
      );
      setSignUpData(response.data?.data);
      setOpen(1); // Proceed to the next step
         localStorage.setItem("email",email)
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
      console.error("Sign up failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col w-full gap-3 md:px-16 mt-12">
      <div>
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Sign Up</h1>
        <p className="text-[16px] font-[400] text-[#000] mt-3">
          Enter your email and password to register
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[14px] font-[500] text-black">
            Name
          </label>
          <div className="flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className="text-[#888EA8]">
              <IoCardOutline />
            </span>
            <input
              id="name"
              className="focus:outline-none focus:border-none w-full"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Name"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[14px] font-[500] text-black">
            Email
          </label>
          <div className="flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className="text-[#888EA8]">
              <IoMdPerson />
            </span>
            <input
              id="email"
              className="focus:outline-none focus:border-none w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-[14px] font-[500] text-black">
            Password
          </label>
          <div className="flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className="text-[#888EA8]">
              <FaLock />
            </span>
            <input
              id="password"
              className="focus:outline-none focus:border-none w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="subscribe"
            className="h-[20px] w-[20px] border-none outline-none rounded-sm"
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
          />
          <label
            htmlFor="subscribe"
            className="text-[15px] font-[600] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Subscribe to weekly newsletter
          </label>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Error Message */}
      <div className="mt-8 flex flex-col gap-2">
        <button
          type="submit"
          className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
          disabled={isLoading}
        >
          {isLoading ? "Signing Up..." : "Sign Up"} {/* Loader Text */}
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
