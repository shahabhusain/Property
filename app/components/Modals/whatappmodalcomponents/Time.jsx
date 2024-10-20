import Image from "next/image";
import React, { useState } from "react";
import modal from "../../../../public/assets/modal.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Time = () => {
  const [phone, setPhone] = useState(""); 

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-12 mb-6 ">
      <Image src={modal} alt="Modal" />
      <h1 className="text-[22px] font-[600] text-center max-w-[555px]">
      Leave your message and we will contact you as soon as possible
      </h1>
      <div className="w-[58%] flex gap-4">
        <textarea rows={10} cols={80} className=" py-1 px-2  border-[1px] border-[#BFBFBF] rounded-md" type="Message" placeholder="Your message" />
      

       <div className="flex flex-col gap-4">
         <div className=" flex flex-col gap-1">
            <label>Phone Number</label>
         <PhoneInput
          country={"us"}
          value={phone} 
          onChange={(phone) => setPhone(phone)}
        />
         </div>
        <div className=" flex flex-col gap-1">
        <label>Email</label>
        <input className=" py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md" type="email" placeholder="example@gmail.com" />
        </div>
        <button className=" bg-[#AE8E50] py-2 px-5 rounded-md text-white font-[600]">Submit</button>
      </div>
      </div>
      <p className=" text-[16px] font-[300] text-black">Powered by sovereign international</p>
    </div>
  );
};

export default Time;
