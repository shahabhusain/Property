import Image from "next/image";
import React, { useState } from "react";
import modal from "../../../../public/assets/modal.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { axiosPrivateForm } from "@/app/lib/axios";

const CallMeNow = () => {
  const [phone, setPhone] = useState(""); // For phone input
  const [successMessage, setSuccessMessage] = useState(true)
  const handleSubmit = async () => {
    let formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;
    
    try {
      const response = await axiosPrivateForm.post("/calltoaction/call-me-now", {
        client_phone_number: formattedPhone, 
      });
      console.log(response.data);
      setSuccessMessage(!successMessage)
      localStorage.setItem("phone",phone)
    } catch (error) {
      console.error("Error submitting phone number:", error);
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-10 mb-6">
      <Image src={modal} alt="Modal" />
      
    {
      successMessage ? <>
        <h1 className="text-[22px] font-[600] text-center max-w-[555px]">
        Would you like to receive a free callback in 28 seconds and check how
        CallPage works?
      </h1>
        <div className="flex items-center justify-between gap-4">
      <PhoneInput
        country={"pk"}
        value={phone} // Use phone state for input
        onChange={(number) => setPhone(number)} // Update phone state with the input value
      />
      <button
        onClick={handleSubmit}
        className="py-2 rounded-md px-6 bg-[#AE8E50] text-white font-[600] text-[15px] whitespace-nowrap"
      >
        Call Me Now
      </button>
    </div></> : <>
            {/* success */}
      <p className="text-[22px] font-[600] text-center max-w-[555px]">Thanks for contacting sovereign international, we will get back to you soon</p>
            {/* success */}
    </>
    }

      <p className="text-[16px] font-[300] text-black">
        Powered by Sovereign International
      </p>
    </div>
  );
};

export default CallMeNow;
