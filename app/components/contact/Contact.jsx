

import React from 'react'
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import contact from '../../../public/assets/contact.png'
const Contact = () => {

 
  return (
    <>    <div className=' flex gap-6 bg-[#BABABA40] rounded-2xl px-6 py-6 '>
      <Image className=' w-1/2 ' src={contact} alt='image' />
       <form className="w-1/2 flex flex-col px-6  gap-3 ">
      <div className=' flex items-center justify-between'>
        <h1 className="text-[#AE8E50] text-[35px] font-[500]">Contact </h1>
        <p className="text-[14px] font-[400] text-[#000] mt-3 max-w-[355px]">
        Get in touch with one of the fastest emerging real estate brokers in Dubai. We are just a call away to help you with a stress free process of property buying, selling or renting in Dubai 

        </p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input className=' py-3 bg-[#fff] px-3 rounded-md ' type="text" placeholder='Full Name*' required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input className=' py-3 bg-[#fff] px-3 rounded-md ' type="Email*" placeholder='Email*' required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Phone Number</label>
        <input className=' py-3 bg-[#fff] px-3 rounded-md ' type="text" placeholder='Phone Number*' required />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Message</label>
        <textarea className=' px-3 rounded-md' rows={7} id="message" type="message" placeholder="message" required />
      </div>
     
      <div className="mt-12 flex flex-col gap-2">
        <button
          type="submit"
          className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
    </>
  )
}

export default Contact