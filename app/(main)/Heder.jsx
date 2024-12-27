"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import profile from "@/public/assets/prof1.png";
import whiteprofile from "@/public/assets/whiteProf1.png";
import { Button } from "@/components/ui/button";
import profilee from "@/public/assets/profilee.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { isLoggedIn } from "../lib/auth";
import { useRouter } from "next/navigation"; 

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter(); 

  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push("/");
    window.location.reload()
  };




  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollHandler = () => {
        window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
      };
      scrollHandler(); // Run on mount to check initial scroll position

      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }
  }, []);

   console.log("loogredin", isLoggedIn)

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-[10] flex items-center justify-between transition-all pb-4 duration-300 ease-in-out ${
        isActive ? "bg-black text-white shadow-md" : "bg-transparent text-black"
      }`}
    >
      <div className="flex items-center w-full max-w-[1450px] mx-auto pt-4 px-4 justify-between">
        <Link href="/home">
          <Image className="w-[60px]" src={logo} alt="Logo" width={150} height={50} />
        </Link>
        <div className="list-none flex items-center gap-12">
          <Link href="/buy" className="cursor-pointer text-[20px] font-[500]">
            Buy
          </Link>
          <Link href="/offline" className="cursor-pointer text-[20px] font-[500]">
            Off Plan
          </Link>
          <Link href="/properties" className="cursor-pointer text-[20px] font-[500]">
            Properties
          </Link>
          <Link href="/about" className="cursor-pointer text-[20px] font-[500]">
            About
          </Link>
          <Link href="/contact" className="cursor-pointer text-[20px] font-[500]">
            Contact
          </Link>
          <div>
           {isLoggedIn() ? <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="focus:border-none">
                    <Image
                      src={isActive ? whiteprofile : profile}
                      alt="User Profile Picture"
                      width={40}
                      height={40}
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-4 bg-black text-white">
                  <div className="flex items-center justify-between">
                    <Image src={profilee} alt="User profile" width={40} height={40} />
                    <div>
                      <h1 className="text-[16px] font-[600] text-white">Shahab</h1>
                      <p className="text-[14px] text-[#E7E7E7] font-[600] flex ">shhaab@gmail.com</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Menu</DropdownMenuLabel>
                  <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="Profile">
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Profile Likes">
                      <Link href="/profilelike">Like Property</Link>
                    </DropdownMenuRadioItem>
                    <button onClick={handleLogOut} className="text-[14px] ml-7">
                      Log Out
                    </button>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu></> : <>
              <Link
              href="/signup"
                className="cursor-pointer text-[15px] font-[500] py-2 px-5 text-white bg-[#AE8E50]"
              >
                Sign Up
              </Link></>}
        
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
