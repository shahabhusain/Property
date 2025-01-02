"use client"

import React, { useState } from "react";
import mapLogo from '../../../public/assets/mapLogo.png'
import Image from "next/image";
import Average from "./locationcomponents/Average";
import Studio from "./locationcomponents/Studio";
import Br1 from "./locationcomponents/Br1";
import Br2 from "./locationcomponents/Br2";
import Br3 from "./locationcomponents/Br3";
import Br4 from "./locationcomponents/Br4";

const Location = () => {
    const [open, setOpen] = useState(1)
  return (
      <div>
           <div className=" mt-5  rounded-md bg-white py-2 px-3 flex flex-col gap-3">
        <h1 className=" text-[20px] font-[400] text-black">All Locations</h1>
        <div className=" flex items-center justify-between bg-[#f7f7f7] py-3 px-3">
            <button onClick={() => setOpen(1)} className={` text-[14px] font-[300] ${open === 1 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>Average</button>
            <button onClick={() => setOpen(2)} className={` text-[14px] font-[300] ${open === 2 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>Studio</button>
            <button onClick={() => setOpen(3)} className={` text-[14px] font-[300] ${open === 3 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>1br</button>
            <button onClick={() => setOpen(4)} className={` text-[14px] font-[300] ${open === 4 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>2br</button>
            <button onClick={() => setOpen(5)} className={` text-[14px] font-[300] ${open === 5 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>3br</button>
            <button onClick={() => setOpen(6)} className={` text-[14px] font-[300] ${open === 6 ? " bg-[#AE8E50] px-2 rounded-sm text-white" : "text-[#393939]"}`}>4br+</button>
        </div>
         <h1>Locations 8/ 120</h1>
       {
        open === 1 ? <><Average /></> : open === 2 ? <><Studio /></> : open === 3 ? <><Br1 /></> : open === 4 ? <><Br2 /></> : open === 5 ? <><Br3 /></> : open === 6 ? <><Br4 /></> : null
       }
       <div className=" flex flex-col gap-3">
        <button className=" bg-white py-2 px-5 rounded-md border-[1px] border-[#AE8E50]">Chat With Us</button>
      
       </div>
       
    </div>
      <div className=" flex items-center justify-between mt-12 gap-6">
      <Image src={mapLogo} alt="maplogo" />
      <span className=" flex flex-col gap-1"><h1 className=" text-[17px] font-[600] text-black">Sovereign International</h1> <p className=" text-[11px] font-[300] text-black">Real Estate</p></span>
  </div>
      </div>
  );
};

export default Location;
