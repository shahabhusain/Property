import React from 'react'
import logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div className=' flex items-center justify-between w-[92%] mx-auto mt-6'>
        <Link href="/"> <Image src={logo} alt='image'/></Link>
        <button className='bg-[#AE8E50] rounded-md  text-white font-medium py-2 px-4'>Sign Up</button>
    </div>
  )
}

export default Header