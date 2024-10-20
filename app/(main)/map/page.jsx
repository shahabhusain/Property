"use client"

import React, { useState } from "react";
import Location from "@/app/components/map/Location";
import Overview from "@/app/components/map/Overview";
import Projects from "@/app/components/map/Projects";
const Map = () => {
    const [open, setOpen] = useState(1)
  return (
    <div className=" relative">
      <div className=" mt-32">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0327106585!2d54.89782944320242!3d25.075658397134212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1728842208065!5m2!1sen!2s"
          width="1515"
          height="1000"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className=" bg-[#F7F7F7] w-[300px] py-4 px-3 absolute top-[7rem] left-3 ">
         <h1>Dubai</h1>
         <div className=" bg-white py-2 px-3 flex items-center justify-between rounded-md" >
            <button onClick={() => setOpen(1)} className={`${open === 1 ? " py-1 px-2 text-white bg-[#AE8E50] rounded-sm" : ""}`}>Overview</button>
            <button onClick={() => setOpen(2)} className={`${open === 2 ? " py-1 px-2 text-white bg-[#AE8E50] rounded-sm" : ""}`}>Locations</button>
            <button onClick={() => setOpen(3)} className={`${open === 3 ? " py-1 px-2 text-white bg-[#AE8E50] rounded-sm" : ""}`}>Project</button>
         </div>
         {
            open === 1 ? <><Overview /></> : open === 2 ? <><Location /></> : open === 3 ? <><Projects /></> : null
         }
      </div>
    </div>
  );
};

export default Map;
