'use client';

import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";

const ChangePassword = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      router.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-3 px-14 mt-12">
      <div>
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Change Password</h1>

         <div className="flex flex-col gap-8 mt-8">
         <div className="flex flex-col gap-2">
          <label htmlFor="name" className=" text-[14px] font-[500] text-black">
          New Password
          </label>
          <div className=" flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className=" text-[#888EA8]">
              <FaLock />
            </span>
            <input
              className=" focus:outline-none focus:border-none"
              type="password"
              placeholder="Enter New Password"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className=" text-[14px] font-[500] text-black">
          Re-type New Password
          </label>
          <div className=" flex items-center gap-2 py-2 px-2 rounded-md bg-[#FFFFFF]">
            <span className=" text-[#888EA8]">
              <FaLock />
            </span>
            <input
              className=" focus:outline-none focus:border-none"
              type="password"
              placeholder="Enter Re-type New Password"
              required
            />
          </div>
        </div>
         </div>

        <div className="mt-20 flex flex-col gap-2 relative ">
          <button
            type="submit"
            className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
          >
            Change Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChangePassword;
