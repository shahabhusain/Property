import React from 'react'
import Image from 'next/image';
import register from '../../../public/assets/register.png'
const Register = () => {
  return (
    <div className=' relative mt-20'>
      <Image src={register} alt='image' />
        <form className=' bg-[#ffffff4d] absolute top-[12rem] right-10 flex flex-col gap-6 w-[40%]  py-12 px-16'>
            <h1 className=' text-white text-[25px] font-[600]'>Register your Interest</h1>
            <input type="name" className=' py-3 rounded-sm px-3 focus:border-none focus:outline-none' placeholder='Full Name*' required />
            <input type="name" className=' py-3 rounded-sm px-3 focus:border-none focus:outline-none' placeholder='Email*' required />
            <input type="name" className=' py-3 rounded-sm px-3 focus:border-none focus:outline-none' placeholder='Phone no*' required />
        <button className=' bg-[#AE8E50] py-3 px-5 text-white'>Submit Your Detail</button>
        </form>
    </div>
  )
}

export default Register