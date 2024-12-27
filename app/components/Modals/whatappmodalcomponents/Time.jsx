import Image from "next/image";
import React, { useState } from "react";
import modal from "../../../../public/assets/modal.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { axiosPrivateForm } from "@/app/lib/axios";

const Time = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    // Validation
    if (!message || !phone || !email) {
      setErrorMessage("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        email: email,
        phoneNumber: `+${phone}`,
        message: message,
      };
      const response = await axiosPrivateForm.post(
        "/calltoaction/leave-a-message",
        payload
      );
      setSuccessMessage(!successMessage)
    } catch (error) {
      console.error("Error:", error.response || error.message);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-12 mb-6 ">
      <Image src={modal} alt="Modal" />
     {
      successMessage ? <> <h1 className="text-[22px] font-[600] text-center max-w-[555px]">
      Leave your message and we will contact you as soon as possible
    </h1>
    <div className="w-[58%] flex gap-4">
      <textarea
        rows={10}
        cols={80}
        className="py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label>Phone Number</label>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            disabled={loading}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            className="py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <button
          className="bg-[#AE8E50] py-2 px-5 rounded-md text-white font-[600]"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div></> : <>  <p className="text-[22px] font-[600] text-center max-w-[555px]">Message sent successfully</p></>
     }
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <p className="text-[16px] font-[300] text-black">
        Powered by Sovereign International
      </p>
    </div>
  );
};

export default Time;
