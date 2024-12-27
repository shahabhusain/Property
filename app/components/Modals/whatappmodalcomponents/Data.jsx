"use client"

import React, { useState } from 'react'
import modal from "../../../../public/assets/modal.png";
import Image from 'next/image';
const Data = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Default to current month
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Default to current year
  
    const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  
    // Generate the days of the month
    const getDaysInMonth = (month, year) => {
      const date = new Date(year, month + 1, 0); // Get last day of the month
      const days = [];
      for (let i = 1; i <= date.getDate(); i++) {
        days.push(i);
      }
      return days;
    };
  
    // Get the current month's days
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  
    // Get the weekday of the 1st day of the month to align the calendar properly
    const getFirstDayOfMonth = (month, year) => {
      const date = new Date(year, month, 1);
      return date.getDay(); // Returns 0 for Sunday, 1 for Monday, etc.
    };
  
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
  
    // Handle month navigation
    const goToPreviousMonth = () => {
      if (currentMonth === 0) {
        setCurrentMonth(11); // December
        setCurrentYear(currentYear - 1); // Decrease year
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    };
  
    const goToNextMonth = () => {
      if (currentMonth === 11) {
        setCurrentMonth(0); // January
        setCurrentYear(currentYear + 1); // Increase year
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    };
  return (
    <div className=' flex flex-col items-center justify-center mt-8'>
            <Image src={modal} alt="Modal" />
          <h1 className="text-[22px] font-[600] text-center max-w-[555px] mt-3">
             Choose a time to book
          </h1>
          <div className="flex items-start gap-10 p-8 rounded-md">
      {/* Calendar */}
      <div className="w-[300px] bg-white rounded-md shadow p-4">
        <div className="flex justify-between items-center text-gray-700 mb-2">
          <button onClick={goToPreviousMonth} className="p-1 rounded-md hover:bg-gray-200">
            &lt;
          </button>
          <span className="text-lg font-semibold">{`${new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })} ${currentYear}`}</span>
          <button onClick={goToNextMonth} className="p-1 rounded-md hover:bg-gray-200">
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-500 text-sm mb-2">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty cells before the 1st day */}
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div key={`empty-${i}`} className="py-2"></div>
          ))}

          {/* Days of the month */}
          {daysInMonth.map((day) => (
            <button
              key={day}
              className={`py-2 rounded-full text-center ${
                selectedDate === day
                  ? "bg-[#AE8E50] text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedDate(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="flex flex-col gap-2">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`w-[100px] py-2 rounded-md border text-center ${
              selectedTime === time
                ? "bg-[#AE8E50] text-white"
                : "hover:bg-gray-200 text-gray-700"
            }`}
          >
            {time}
            {selectedTime === time && <span className="ml-2 text-xs">Confirm</span>}
          </button>
        ))}
      </div>
    </div>
    <p className=" text-[16px] font-[300] text-black">Powered by sovereign international</p>
    </div>
  )
}

export default Data