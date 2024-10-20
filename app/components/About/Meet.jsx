import Image from 'next/image'
import React from 'react'
import meet from '../../../public/assets/meet.png'
const Meet = () => {
  return (
  <div className=' mt-32 relative'>
      <div className=' w-[92%] mx-auto'>
        <Image src={meet} alt='image' />
      <div className=' bg-[#0B0F1ED4] absolute top-[5rem] right-[6rem]  py-12 px-12 flex flex-col gap-4 w-1/2 '>
        <h1 className=' text-white text-[35px] font-[600]'>Meet Director</h1>
        <p className=' text-[17px] font-[400] text-[#AE8E50]'>Hello, I am Gurpreet Singh, and I bring a background in BSc Hons Architectural Technology to the table, complemented by a wealth of experience in property development, spanning from refurbishments to brand-new construction projects. I am here to guide you every step of the way, from the projects initial stages right through to completion, should you require it.</p>
        <p className=' text-[17px] font-[400] text-[#AE8E50]'>Feel free to reach out to me and I will personally assist you in selling your new build ventures, whether it is a single dwelling or a larger site development. I am available 7 days a week including evenings, to ensure your satisfaction and commitment to providing a personalized 1-2-1 service.</p>
        <p className=' text-[17px] font-[400] text-[#AE8E50]'>With several years deeply involved in the real estate industry, I have gained extensive experience in both the UK and Dubai primary and secondary real estate markets. My focus is on tailoring my services to my clients, offering start-to-finish support for the launch of new off-plan projects or for newly built properties currently available in the UK and Dubai. Let us turn your real estate vision into a reality together.</p>
      </div>
    </div>
  </div>
  )
}

export default Meet