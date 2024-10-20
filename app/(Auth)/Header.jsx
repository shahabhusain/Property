import React from 'react'
import logo from '@/public/assets/logo.svg'
import Image from 'next/image'
const Header = () => {
  return (
    <div className=' flex items-center justify-between w-[92%] mx-auto mt-6'>
        <Image src={logo} alt='image'/>
        <button className='bg-[#AE8E50] rounded-md  text-white font-medium py-2 px-4'>Sign Up</button>
    </div>
  )
}

export default Header