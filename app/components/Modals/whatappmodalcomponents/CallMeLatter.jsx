import Image from "next/image";
import React, { useState, useEffect } from "react";
import modal from "../../../../public/assets/modal.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { axiosPrivateForm } from "@/app/lib/axios";

const CallMeLatter = () => {
  const [phone, setPhone] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const now = new Date();
    const date = now.toISOString().split("T")[0];
    const time = now.toTimeString().split(":").slice(0, 2).join(":");
    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  const handleSubmit = async () => {
    if (!phone || !currentDate || !currentTime) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axiosPrivateForm.post("/calltoaction/call-me-later", {
        day_of_week: new Date(currentDate).toLocaleString("pk", { weekday: "long" }),
        time_to_call: currentTime,
        client_phone_number: `+${phone}`,
      });
      setSuccessMessage(!successMessage)
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-20 mb-6">
      <Image src={modal} alt="Modal" />
    {
      successMessage ? <>  <h1 className="text-[22px] font-[600] text-center max-w-[555px]">
      Choose the best time for the callback:
    </h1>
    <div className="flex items-center justify-between gap-4">
      <input
        className="py-1 px-[3rem] rounded-md border-[1px] border-[#BFBFBF]"
        type="date"
        value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)}
      />
      <input
        className="py-1 px-[3rem] rounded-md border-[1px] border-[#BFBFBF]"
        type="time"
        value={currentTime}
        onChange={(e) => setCurrentTime(e.target.value)}
      />
    </div>
    <div className="flex items-center justify-between gap-4">
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      <button
        className="py-2 rounded-md px-6 bg-[#AE8E50] text-white font-[600] text-[15px] whitespace-nowrap"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Loading..." : "Call Me Now"}
      </button>
    </div></> : <>  <p className="text-[22px] font-[600] text-center max-w-[555px]">Thanks for contacting sovereign international, we will get back to you soon</p></>
    }
       {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <p className="text-[16px] font-[300] text-black">Powered by Sovereign International</p>
    </div>
  );
};

export default CallMeLatter;
