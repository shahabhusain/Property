'use client';

import { axiosPrivateForm } from "@/app/lib/axios";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";

const ForgetPassword = ({ setOpen }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivateForm.post("/auth/forget-password", { email });
      console.log("Response:", response.data);
      localStorage.setItem("email",email)
      setOpen(5);
    } catch (err) {
      console.error("Error in forget password request:", err);
      setError("Failed to reset password. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-3 md:px-14 w-full mt-12">
      <div>
        <div>
          <h1 className="text-[#AE8E50] text-[35px] font-[600]">Enter email</h1>
          <p className="text-[16px] font-[500] text-[#000] mt-3">
            Enter your email to reset password
          </p>
        </div>

        {/* Email Input Section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[14px] font-[500] text-black">
            Email
          </label>
          <div className="flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className="text-[#888EA8]">
              <AiFillMessage />
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

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-20 flex flex-col gap-2 relative">
          <button
            type="submit"
            className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
          >
            RECOVER
          </button>
        </div>
      </div>
    </form>
  );
};

export default ForgetPassword;
