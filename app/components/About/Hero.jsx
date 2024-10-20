import Image from 'next/image'
import React from 'react'
import about from '../../../public/assets/about.png'
const Hero = () => {
  return (
    <div className=' relativeflex items-center'>
      <Image src={about} alt='image' />
      <h1 className=' absolute top-[30rem] text-white text-[45px] font-[600] ml-12'>About Us</h1>
    </div>
  )
}

export default Hero