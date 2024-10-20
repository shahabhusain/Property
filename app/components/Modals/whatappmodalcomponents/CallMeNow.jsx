import Image from "next/image";
import React, { useState } from "react";
import modal from "../../../../public/assets/modal.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CallMeNow = () => {
  // Use useState to manage the phone input value
  const [phone, setPhone] = useState(""); // Initially, phone is an empty string

  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-20 mb-6 ">
      <Image src={modal} alt="Modal" />
      <h1 className="text-[22px] font-[600] text-center max-w-[555px]">
        Would you like to receive a free callback in 28 seconds and check how
        CallPage works?
      </h1>
      <div className="flex items-center justify-between gap-4">
        <PhoneInput
          country={"us"}
          value={phone} // Use phone from useState
          onChange={(phone) => setPhone(phone)} // Update phone state with setPhone
        />
        <button className="py-2 rounded-md px-6 bg-[#AE8E50] text-white font-[600] text-[15px] whitespace-nowrap">
          Call Me Now
        </button>
      </div>
      <p className=" text-[16px] font-[300] text-black">Powered by sovereign international</p>
    </div>
  );
};

export default CallMeNow;
