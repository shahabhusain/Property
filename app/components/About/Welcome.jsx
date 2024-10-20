import Image from 'next/image'
import React from 'react'
import wel from '../../../public/assets/wel.png'
const Welcome = () => {
  return (
    <div className=' w-[90%] mx-auto flex items-center justify-between gap-16 mt-32'>
        <div className=' flex flex-col gap-8 w-1/2'>
            <h1 className=' text-[#AE8E50] text-[35px] font-[600]'>Welcome to Sovereign international</h1>
            <p className=' text-[#282828] text-[20px] font-[400]'>Welcome to Sovereign International, your trusted partner in the world of real estate. With a presence in both London and Dubai, i am dedicated to helping you find your dream home or investment property.</p>
            <p className=' text-[#282828] text-[20px] font-[400]'>My experiences make me committed to guiding you through the exciting journey of property ownership, and i take pride in offering you the highest level of service and expertise. Whether you are looking for a place to call home or a strategic investment opportunity, Sovereign International is here to make your real estate aspirations a reality.</p>
            <p className=' text-[#282828] text-[20px] font-[400]'>I invite you to explore our portfolio and I look forward to being a part of your real estate success story.</p>
        </div>
        <Image src={wel} alt='image' />
    </div>
  )
}

export default Welcome