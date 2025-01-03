import Image from "next/image";
import React, { useState } from "react";
import modal from "../../../../public/assets/modal.png";
import profile from "../../../../public/assets/profile1.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { axiosPrivateForm } from "@/app/lib/axios";
import { format, parseISO, addMinutes } from "date-fns";
const Schedule = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agenda, setAgenda] = useState("");
  const [duration, setDuration] = useState("1");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [responses, setResponses] = useState([]);

  const formattedStartTime = (start, duration) => {
    const startTime = parseISO(start); // Parse ISO string to Date object
    const endTime = addMinutes(startTime, duration); // Add duration in minutes for end time
  
    // Format start and end times
    const formattedStart = format(startTime, "MMMM, EEEE do, HH:mm");
    const formattedEnd = format(endTime, "HH:mm");
  
    return `${formattedStart} - ${formattedEnd}`;
  };

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
      setResponses([response.data?.data]);
      console.log("data", response.data);
      console.log("Responses State:", responses);
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
          <></>
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
                onChange={(e) => {
                  const value = e.target.value;
                  if (value <= 30) {
                    setDuration(value);
                  }
                }}
                min="1"
                max="30"
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
      <>
      {responses.map((item) => (
  <div key={item._id} className="">
               <div className=" flex flex-col items-center justify-center gap-y-3">
               <h2 className="text-[18px] font-[600]">
      {item.client_name}, thank you for scheduling a CallPage Demo
    </h2>
    <Image
      width={100}
      height={100}
      alt="image"
      className="rounded-full"
      src={profile} 
    />
    <p className="text-[18px] font-[400]">
      You are meeting with Gurpreet Singh
    </p>
               </div>
    <div className=" flex flex-col gap-3 mt-4">
    <p>Time: {formattedStartTime(item.start_time, item.duration)}</p>
      <p>Guests: {item.client_email}</p>
      <p>
        Booking details: We’ve sent an email with your full booking
        details
      </p>
    </div>
  </div>
))}

      </>
    </div>
  );
};

export default Schedule;