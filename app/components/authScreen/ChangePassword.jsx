'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";
import { axiosPrivateForm } from "@/app/lib/axios";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

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

  const handleResendOtp = async () => {
    const email = localStorage.getItem("email");

    if (!email) {
      setError("Email not found. Please try again.");
      return;
    }

    setResendLoading(true);
    setError(null);
    try {
      const response = await axiosPrivateForm.post("/auth/resend-email-otp", {
        email: email,
      });
      console.log("Resend OTP Success:", response.data);
      alert("A new OTP has been sent to your email!");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to resend OTP.");
      console.error("Resend OTP Error:", error);
    } finally {
      setResendLoading(false);
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

    try {
      const response = await axiosPrivateForm.post("/auth/reset-password", {
        email: email,
        emailOtp: otpString,
        password: password,
        confirmPassword: confirmPassword,
      });
      setOpen(2);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
      console.error("OTP verification failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-1/2 w-full flex flex-col gap-3 md:px-14 mt-12"
    >
      <div>
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">
          Change Password
        </h1>

        <div className="flex flex-col gap-8 mt-8">
          <div className="leading-3">
            <span>OTP</span>
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
                  className="md:w-[5rem] w-[3rem] h-[3rem] md:h-[5rem] text-center text-lg font-medium border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE8E50]"
                />
              ))}
            </div>
          </div>

          {/* New Password Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="newPassword"
              className="text-[14px] font-[500] text-black"
            >
              New Password
            </label>
            <div className="flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
              <span className="text-[#888EA8]">
                <FaLock />
              </span>
              <input
                id="newPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:outline-none focus:border-none"
                type="password"
                placeholder="Enter your new password"
                required
              />
            </div>
          </div>

          {/* Confirm New Password Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-[14px] font-[500] text-black"
            >
              Re-type New Password
            </label>
            <div className="flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
              <span className="text-[#888EA8]">
                <FaLock />
              </span>
              <input
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="focus:outline-none focus:border-none"
                type="password"
                placeholder="Re-type New Password"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-20 flex flex-col gap-2 relative">
          <button
            type="submit"
            className="bg-[#AE8E50] border-[1px] rounded-md text-white font-medium py-3 px-4 w-full"
            disabled={loading}
          >
            {loading ? "Changing Password..." : "Change Password"}
          </button>

          {/* Resend OTP Button */}
          <button
            type="button"
            onClick={handleResendOtp}
            className="border-[3px] border-[#AE8E50] rounded-md text-black font-medium py-3 px-4 w-full"
            disabled={resendLoading}
          >
            {resendLoading ? "Resending OTP..." : "Resend OTP"}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </form>
  );
};

export default ChangePassword;
