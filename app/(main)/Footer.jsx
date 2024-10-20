import Image from "next/image";
import React from "react";
import footerLogo from "@/public/assets/fLogo.svg";
import map from '@/public/assets/map.png'
import icon from '@/public/assets/icon.png'
import Link from "next/link";
import profile from '@/public/assets/profile.png'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black text-white pt-20 pb-10 rounded-t-xl mt-32 ">
         <div className=" flex justify-between w-[90%] mx-auto" >
      {/*  */}
        <div>
        <Image src={footerLogo} alt='image' />

<div>
  <h1 className="text-lg font-semibold mt-[10rem]">Subscribe to our news</h1>
  <p className=" max-w-[355px] mt-4 text-[14px] font-[400]">
    Stay Informed and Never Miss a Beat: Subscribe to Our Exclusive News
    Updates!
  </p>
  <input className=" p-2 text-white bg-transparent border-b border-white mt-8 w-full" type="text" placeholder="Enter your email" />
  
</div>
<button className="bg-[#AE8E50] rounded-md  text-white font-medium py-2 px-4 mt-4">Subscribe</button>
        </div>
      {/*  */}

      {/*  */}
       <div className=" flex flex-col gap-6">
       <ul className=" flex flex-col gap-5">
        <li className=" text-[18px] font-[500]">Quick Navigation</li>
        <li className=" text-[18px] font-[500]">Home</li>
        <li className=" text-[18px] font-[500]">Buy</li>
        <li className=" text-[18px] font-[500]">Off Plane</li>
        <li className=" text-[18px] font-[500]">Property</li>
        <li className=" text-[18px] font-[500]">About</li>
        <li className=" text-[18px] font-[500]">Contact</li>
      </ul>

      <a
        className=" mt-8"
        href="https://www.google.com/maps/place/Dubai+Marina,+Dubai,+United+Arab+Emirates/"
        target="_blank"
      >
        <Image src={map} alt='image' />
      </a>
      <p className=" flex flex-col text-[14px] font-[500]">123 Zayed Road, <span>Dubai Marina,</span> <span>Dubai, United Arab Emirates</span></p>
       </div>
      {/*  */}

      {/*  */}
      <div>
      <div className="">
       <div className=" flex items-center gap-7">
       <Image src={profile} alt='image' />
        <div className="">
            <h1 className=" text-[15px] font-[300]">Meet Founder</h1>
            <p className=" text-[15px] font-medium">Gurpreet Singh</p>
        </div>
       </div>

        <p className=" mt-3 text-[15px] font-[300] max-w-[222px]">We are here to change your future.</p>
        <button className="bg-[#AE8E50] rounded-md text-white font-medium py-2 px-4 mt-4">Contact</button>

        <div className=" flex items-center gap-12 mt-[15rem]">
             <button className=" bg-[#AE8E50] py-3 px-3 rounded-full text-white"><FaInstagram /></button>
             <button className=" bg-[#AE8E50] py-3 px-3 rounded-full text-white"><FaFacebook /></button>
             <button className=" bg-[#AE8E50] py-3 px-3 rounded-full text-white"><FaTwitter /></button>
             <button className=" bg-[#AE8E50] py-3 px-3 rounded-full text-white"><FaGoogle /></button>
        </div>

        <div className="mt-8 text-[#fff] flex items-center gap-9">
       
            <p className="mt-2 flex flex-col gap-2 text-center text-[14px] font-[400]">
              <span>Terms of Service</span>
              <span className=" font-[500] ">Privacy Policy</span>
            </p>
            <p className=" flex flex-col gap-2 text-[14px] font-[400] text-center"><span>Sovereign International</span> <span className=" font-[500] ">Privacy Policy</span></p>
          </div>
       </div>
      </div>
      {/*  */}
    </div>
    </div>
  );
};

export default Footer;
