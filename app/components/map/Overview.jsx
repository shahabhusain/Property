"use client"

import React, { useState } from "react";
import All from "./OverviewMapComponents/All";
import Map2020 from "./OverviewMapComponents/Map2020";
import Map2021 from "./OverviewMapComponents/Map2021";
import Map2022 from "./OverviewMapComponents/Map2022";
import Map2023 from "./OverviewMapComponents/Map2023";
import Map2024 from "./OverviewMapComponents/Map2024";
import mapLogo from '../../../public/assets/mapLogo.png'
import Image from "next/image";

const Overview = () => {
    const [open, setOpen] = useState(1)
  return (
    <div className=" mt-5  rounded-md bg-white py-2 px-3">
        <div className=" flex items-center justify-between bg-[#f7f7f7] py-3 px-3">
            <button onClick={() => setOpen(1)} className={` text-[14px] font-[300] ${open === 1 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>All</button>
            <button onClick={() => setOpen(2)} className={` text-[14px] font-[300] ${open === 2 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>2020</button>
            <button onClick={() => setOpen(3)} className={` text-[14px] font-[300] ${open === 3 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>2021</button>
            <button onClick={() => setOpen(4)} className={` text-[14px] font-[300] ${open === 4 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>2022</button>
            <button onClick={() => setOpen(5)} className={` text-[14px] font-[300] ${open === 5 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>2023</button>
            <button onClick={() => setOpen(6)} className={` text-[14px] font-[300] ${open === 6 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>2024</button>
        </div>
      <div className=" flex items-center justify-between mt-3">
        <div className="">
          <h1 className=" text-[#727272] text-[13px] font-[300]">Current Price</h1>
          <h2 className=" text-[#AE8E50] text-[14px] font-[600]">521 USD/FT 2</h2>
          <p className=" text-[8px] font-[300] text-[#727272]">August 2024</p>
        </div>
        <div className="">
          <h1 className=" text-[#727272] text-[13px] font-[300]">Forecast Price</h1>
          <h2 className="text-[#AE8E50] text-[14px] font-[600]"> 521 USD/FT 2</h2>
          <p className=" text-[8px] font-[300] text-[#727272]">August 2024</p>
        </div>
      </div>
       {
        open === 1 ? <><All /></> : open === 2 ? <><Map2020 /></> : open === 3 ? <><Map2021 /></> : open === 4 ? <><Map2022 /></> : open === 5 ? <><Map2023 /></> : open === 6 ? <><Map2024 /></> : null
       }
       <div className=" flex flex-col gap-3 mt-24">
        <button className=" bg-white py-2 px-5 rounded-md border-[1px] border-[#AE8E50]">Chat With Us</button>
        <div className=" flex items-center gap-6">
            <Image src={mapLogo} alt="img" />
            <span className=" flex flex-col gap-1"><h1 className=" text-[17px] font-[600] text-black">Sovereign International</h1> <p className=" text-[11px] font-[300] text-black">Real Estate</p></span>
        </div>
       </div>
       
    </div>
  );
};

export default Overview;
