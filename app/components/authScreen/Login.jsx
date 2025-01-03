"use client";

import React, { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { axiosPrivateForm } from "@/app/lib/axios";
const Login = ({ setOpen }) => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosPrivateForm.post(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/auth/login`,
        { email, password, subscribe }
      );
      setSignUpData(response.data?.data);
     
      if (typeof window !== "undefined") {
        localStorage.setItem("token",response.data?.token)
        localStorage.setItem("email", email);
        // if (response.data?.data?.isVerified === true) {
        //   router.push("/home");
        // } else {
        //   setOpen(6);
        // }
       
           router.push("/home");
           toast.success("your account has been created")
      }
      console.log("response.data?.data.token", response.data)
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
      console.error("Sign up failed:", error.response || error.message || error);
      toast.error("something went wrong")
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-1/2 flex w-full flex-col gap-3 mt-12 md:mx-14">
      <div>
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Sign In</h1>
        <p className="text-[16px] font-[500] text-[#000] mt-3">
          Enter your email and password to login
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-4">
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
              className="focus:outline-none focus:border-none"
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
              className="focus:outline-none focus:border-none"
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
            className="h-[20px] w-[20px] border border-gray-300 rounded-sm checked:bg-blue-500"
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
          />
          <label
            htmlFor="subscribe"
            className="text-[15px] font-[600] leading-none"
          >
            Subscribe to weekly newsletter
          </label>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <div className="mt-20 flex flex-col gap-3">
        <div className="flex flex-col gap-2 relative">
          <button
            type="submit"
            className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
          <button
            type="button"
            onClick={() => setOpen(3)}
            className="absolute top-14 right-0 text-[14px] font-[700] underline text-[#AE8E50]"
          >
            Forgot Password
          </button>
        </div>

        <h1 className="text-[14px] font-[400] flex gap-2 items-center justify-center mt-8">
          Don’t have an account?{" "}
          <button onClick={() => setOpen(0)} className="underline text-[#AE8E50]">
            SIGN UP
          </button>
        </h1>
      </div>
    </form>
  );
};

export default Login;
