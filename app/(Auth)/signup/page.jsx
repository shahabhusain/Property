"use client";
import React, { useState } from "react";
import Image from "next/image";
import auth from '@/public/assets/auth.png'
import Otp from "../../components/authScreen/Otp";
import SignUpForm from "../../components/authScreen/SignUpForm";
import Login from "../../components/authScreen/Login";
import ForgetPassword from "../../components/authScreen/ForgetPassword";
import ChangePassword from "../../components/authScreen/ChangePassword";
import EmailVefiedOtp from "@/app/components/authScreen/EmailVefiedOtp";

const SignUp = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="flex justify-between gap-12 px-12 bg-[#ECECEC] w-[92%] mx-auto py-12 my-12">
        <Image
          className="w-1/2 md:flex hidden"
          src={auth}
          alt="Auth Image"
          width={500} 
          height={500}
        />
        {open === 0 ? (
          <SignUpForm setOpen={setOpen} />
        ) : open === 1 ? (
          <Otp setOpen={setOpen} />
        ) : open === 2 ? (
          <Login setOpen={setOpen} />
        ) : open === 3 ? (
          <ForgetPassword setOpen={setOpen} />
        ) : open === 5 ? (
          <ChangePassword setOpen={setOpen} />
        ) : open === 6 ? (
            <EmailVefiedOtp setOpen={setOpen} />)  : null }
      </div>
    </>
  );
};

export default SignUp;
