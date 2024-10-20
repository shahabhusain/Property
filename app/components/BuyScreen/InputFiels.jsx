"use client"

import React, { useState } from "react";
import select from "../../../public/assets/select.svg";
import Image from "next/image";
const InputFiels = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className=" w-full">
      <div className=" flex flex-col gap-4 bg-[#AE8E50] py-6 px-5 mt-6 ">
        <div className=" flex items-center gap-4 w-full">
          <input
            className=" py-2 px-3 w-full rounded-full"
            id="name"
            type="text"
            placeholder=" Enter Keyword"
          />
          {/*  */}
          <div className="relative w-[50%]">
            <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
              <option value="Name">Status</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
            <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
              <Image src={select} alt="image" />
            </span>
          </div>

          {/*  */}
          <div className="relative w-[50%]">
            <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
              <option value="Name">Type</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
            <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
              <Image src={select} alt="image" />
            </span>
          </div>

          <div className="relative w-[50%]">
            <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
              <option value="Name">City</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
            <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
              <Image src={select} alt="image" />
            </span>
          </div>
          <div className="relative w-[50%]">
            <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
              <option value="Name"> Bedrooms</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
            <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
              <Image src={select} alt="image" />
            </span>
          </div>

          <button onClick={() => setOpen(!open)} className={`${open ? " bg-[white] text-black py-2 px-12 rounded-full" : " py-2 px-12 text-white rounded-full border-white border-[1px] "}`}>
            Advance
          </button>
          <button className=" py-2.5 px-12 text-white rounded-full bg-black">
            Search
          </button>
          {/*  */}
        </div>

        <div className={`flex ${open ? "w-full" : "w-[50%]"} gap-4 items-center`}>
        <div className="relative w-full">
          <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
            <option value="Name">Bathrooms</option>
            <option value="Email">Email</option>
            <option value="Password">Password</option>
          </select>
          <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
            <Image src={select} alt="image" />
          </span>
        </div>
        {/*  */}
        {/*  */}
        <div className="relative w-full">
          <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
            <option value="Name">Garage</option>
            <option value="Email">Email</option>
            <option value="Password">Password</option>
          </select>
          <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
            <Image src={select} alt="image" />
          </span>
        </div>
        {/*  */}

        {/*  */}
        <div className="relative w-full">
          <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
            <option value="Name">Property ID</option>
            <option value="Email">Email</option>
            <option value="Password">Password</option>
          </select>
          <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
            <Image src={select} alt="image" />
          </span>
        </div>
        {/*  */}
           {
            open  ? <> <div className="relative w-full">
            <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
              <option value="Name">Min Area</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
            <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
              <Image src={select} alt="image" />
            </span>
          </div>
          {/*  */}
  
          {/*  */}
          <div className="relative w-full">
            <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
              <option value="Name">Max Area</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
            <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
              <Image src={select} alt="image" />
            </span>
          </div>
          {/*  */}
  
          {/*  */}
          <div className="relative w-full">
            <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
              <option value="Name">Min Budget</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
            <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
              <Image src={select} alt="image" />
            </span>
          </div>
          {/*  */}
  
          {/*  */}
          <div className="relative w-full">
            <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
              <option value="Name">Max Badget</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
            <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
              <Image src={select} alt="image" />
            </span>
          </div>
          {/*  */}</> : ""
           }
        </div>
      </div>
    </div>
  );
};

export default InputFiels;
