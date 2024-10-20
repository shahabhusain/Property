import Image from "next/image";
import React, { useState, useEffect } from "react";
import modal from "../../../../public/assets/modal.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CallMeLatter = () => {
  const [phone, setPhone] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const date = now.toISOString().split("T")[0]; 
    const time = now.toTimeString().split(":").slice(0, 2).join(":"); 

    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-20 mb-6">
      <Image src={modal} alt="Modal" />
      <h1 className="text-[22px] font-[600] text-center max-w-[555px]">
        Would you like to receive a free callback in 28 seconds and check how
        CallPage works?
      </h1>
      <div className="flex items-center justify-between gap-4  ">
        <input className=" py-1 px-[3rem] rounded-md border-[1px] border-[#BFBFBF]" type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} />
        <input className=" py-1 px-[3rem] rounded-md border-[1px] border-[#BFBFBF]" type="time" value={currentTime} onChange={(e) => setCurrentTime(e.target.value)} />
      </div>
      <div className="flex items-center justify-between gap-4">
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        <button className="py-2 rounded-md px-6 bg-[#AE8E50] text-white font-[600] text-[15px] whitespace-nowrap">
          Call Me Now
        </button>
      </div>

    

      <p className="text-[16px] font-[300] text-black">Powered by sovereign international</p>
    </div>
  );
};

export default CallMeLatter;
