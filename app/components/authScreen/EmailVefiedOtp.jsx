'use client';

import React, { useState } from "react";
import axios from "axios";

const EmailVefiedOtp = ({ setOpen }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field automatically
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }

    setIsLoading(true);
    setError(null);
    const email = localStorage.getItem("email");
    console.log("email", email);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/auth/verify-email-otp`,
        { emailOtpCode: otpString, otpEmail: email }
      );
      setOpen(2);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
      console.error("OTP verification failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-1/2 w-full md:px-14 mt-12">
      <div className="ml-2">
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">OTP Verification</h1>
        <p className="text-[16px] font-[500] text-[#000] mt-3">
          Enter the OTP sent to your Email
        </p>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="md:w-[4rem] w-[3rem] h-[3rem] md:h-[4rem] text-center text-lg font-medium border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE8E50]"
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div className="mt-20 flex flex-col gap-2">
        <button
          type="submit"
          className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full text-center"
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Sent OTP"}
        </button>
      </div>
    </form>
  );
};

export default EmailVefiedOtp;
