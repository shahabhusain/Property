import Image from "next/image";
import React, { useState } from "react";
import modal from "../../../../public/assets/modal.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { axiosPrivateForm } from "@/app/lib/axios";

const Schedule = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agenda, setAgenda] = useState("");
  const [duration, setDuration] = useState("30");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSchedule = async () => {
    // Validate required fields
    if (!name || !phone || !email || !agenda || !startDate || !duration) {
      setErrorMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axiosPrivateForm.post("/calltoaction/create-zoom-meeting", {
        client_name: name,
        client_email: email,
        client_phone: `+${phone}`,
        topic: "Sovereign International meeting",
        start_time: new Date(startDate).toISOString(),
        duration,
        agenda,
      });

      console.log(response.data); // Debug API response
      setSuccessMessage(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-3 mt-2 mb-6">
      <Image src={modal} alt="Modal" />
      {successMessage ? (
        <p className="text-[22px] font-[600] text-center max-w-[555px]">
          Your meeting has been created successfully.
        </p>
      ) : (
        <>
          <h1 className="text-[22px] font-[600] text-center max-w-[555px]">
            Property Investment Consultation
          </h1>
          <p className="text-[16px] font-[300] text-black text-center max-w-[555px]">
            A member of our sales team will guide you through the platform and
            will answer all your questions.
          </p>

          {/* Name and Agenda */}
          <div className="w-[57%] flex items-center gap-2">
            <div className="flex flex-col gap-1 w-full">
              <label>Full Name</label>
              <input
                className="py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Agenda</label>
              <input
                className="py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md"
                type="text"
                placeholder="Agenda"
                value={agenda}
                onChange={(e) => setAgenda(e.target.value)}
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="flex items-center gap-2 w-[57%]">
            <div className="flex flex-col gap-1 w-full">
              <label>Phone Number</label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Email</label>
              <input
                className="py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Duration and Date */}
          <div className="w-[57%] flex items-center gap-2">
            <div className="flex flex-col gap-1 w-full">
              <label>Duration</label>
              <input
                type="number"
                className="py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Date</label>
              <input
                type="date"
                className="py-1 px-2 border-[1px] border-[#BFBFBF] rounded-md"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </div>

          <button
            className="bg-[#AE8E50] py-2 px-5 rounded-md text-white font-[600] mt-2"
            onClick={handleSchedule}
            disabled={loading}
          >
            {loading ? "Scheduling..." : "Schedule your demo"}
          </button>
        </>
      )}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <p className="text-[16px] font-[300] text-black">
        Powered by Sovereign International
      </p>
    </div>
  );
};

export default Schedule;
