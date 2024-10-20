import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/assets/proj1.png'
import mapLogo from '../../../public/assets/mapLogo.png'
const Projects = () => {
  return (
    <div className=' flex flex-col gap-3'>
        <h1 className=' text-[20px] text-black font-[400]'>All Projects</h1>
        <p className=' text-[#292929] text-[14px] font-[400]'>Available Projects 115/380 </p>
         <div className=' border-[1px] flex flex-col gap-3 border-[#E0E0E0] pt-1'>
         <div className=' flex items-center justify-between border-b-[1px] px-2 py-2 border-b-[#E0E0E0]'>
          <div className=' flex items-center gap-2'>
            <p className=' text-[12px]'>2</p>
            <Image src={img1} alt='img' />
            <p className=' text-[14px] font-[500]'>Baccarat Hotel</p>
        </div>
          <h1 className=' text-[#AE8E50] font-[600] text-[14px]'>824 USD/FT</h1>
          </div>  

          <div className=' flex items-center justify-between border-b-[1px] px-2 py-2 border-b-[#E0E0E0]'>
          <div className=' flex items-center gap-2'>
            <p className=' text-[12px]'>2</p>
            <Image src={img1} alt='img' />
            <p className=' text-[14px] font-[500]'>Baccarat Hotel</p>
        </div>
          <h1 className=' text-[#AE8E50] font-[600] text-[14px]'>824 USD/FT</h1>
          </div>

          <div className=' flex items-center justify-between border-b-[1px] px-2 py-2 border-b-[#E0E0E0]'>
          <div className=' flex items-center gap-2'>
            <p className=' text-[12px]'>3</p>
            <Image src={img1} alt='img' />
            <p className=' text-[14px] font-[500]'>Baccarat Hotel</p>
        </div>
          <h1 className=' text-[#AE8E50] font-[600] text-[14px]'>824 USD/FT</h1>
          </div>

          <div className=' flex items-center justify-between border-b-[1px] px-2 py-2 border-b-[#E0E0E0]'>
          <div className=' flex items-center gap-2'>
            <p className=' text-[12px]'>4</p>
            <Image src={img1} alt='img' />
            <p className=' text-[14px] font-[500]'>Baccarat Hotel</p>
        </div>
          <h1 className=' text-[#AE8E50] font-[600] text-[14px]'>824 USD/FT</h1>
          </div>

          <div className=' flex items-center justify-between border-b-[1px] px-2 py-2 border-b-[#E0E0E0]'>
          <div className=' flex items-center gap-2'>
            <p className=' text-[12px]'>5</p>
            <Image src={img1} alt='img' />
            <p className=' text-[14px] font-[500]'>Baccarat Hotel</p>
        </div>
          <h1 className=' text-[#AE8E50] font-[600] text-[14px]'>824 USD/FT</h1>
          </div>

          <div className=' border-b-[1px] px-2 py-2 border-b-[#E0E0E0]'>
            <p className=' text-[14px] font-[500]'>See More</p>
        </div>
       
         </div>
         <div className=" flex flex-col gap-3 mt-4">
        <button className=" bg-white py-2 px-5 rounded-md border-[1px] border-[#AE8E50]">Chat With Us</button>
        <div className=" flex items-center gap-6">
            <Image src={mapLogo} alt='img' />
            <span className=" flex flex-col gap-1"><h1 className=" text-[17px] font-[600] text-black">Sovereign International</h1> <p className=" text-[11px] font-[300] text-black">Real Estate</p></span>
        </div>
       </div>
    </div>
  )
}

export default Projects