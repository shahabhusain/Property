import Image from "next/image";
import React, { useState } from "react";
import modal from "../../../../public/assets/modal.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Schedule = () => {
  const [phone, setPhone] = useState(""); 

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-12 mb-6 ">
      <Image src={modal} alt="Modal" />
      <h1 className="text-[22px] font-[600] text-center max-w-[555px]">
      Schedule demo with our team
      </h1>
      <p className=" text-[16px] font-[300] text-black text-center max-w-[555px]">A member of our sales team will guide you through the platform and will answer all your questions.</p>

      <div className="flex items-center justify-between gap-4 w-[58%]">
        <div className=" flex flex-col gap-1 w-full">
        <label>First Name</label>
        <input className=" py-1 px-2  border-[1px] border-[#BFBFBF] rounded-md" type="name" placeholder="Your Name" />
        </div>
        <div className=" flex flex-col gap-1 w-full">
        <label>Last Name</label>
       <input className=" py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md" type="name" placeholder="Your Last Name" />
        </div>
      </div>

       <div className="flex items-center justify-between gap-4">
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
      </div>
      <p className=" text-[16px] font-[300] text-black">You will be able to select date and time on the next step.</p>
      <button className=" bg-[#AE8E50] py-2 px-5 rounded-md text-white font-[600]">Schedule your demo</button>
      <p className=" text-[16px] font-[300] text-black">Powered by sovereign international</p>
    </div>
  );
};

export default Schedule;
