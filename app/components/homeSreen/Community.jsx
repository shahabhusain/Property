import Image from 'next/image'
import React from 'react'
import comunity from '../../../public/assets/comunity.png'
import comunity1 from '../../../public/assets/comunity1.png'
import comunity2 from '../../../public/assets/comunity2.png'
import comunity3 from '../../../public/assets/comunity4.png'
const Community = () => {
  return (
 <div className=' flex items-center justify-center flex-col mt-40'>
    <h1 className=' text-[#202020] text-[35px] font-[600]'>The Best Communities</h1>
    <p className=' text-[#202020] text-[21px] font-[400]'>in Dubai for Property Investment</p>
       <div className=' grid grid-cols-4 gap-3 w-[90%] mx-auto mt-14'>
       <div className=''>
       <Image src={comunity} className=' w-full' alt='image' />
        <div className=' bg-black py-6 flex flex-col gap-5'>
            <button className=' py-2 px-5 text-white bg-[#AE8E50] text-[14px] font-[600] w-fit'>From 1,060,000 AED</button>
            <h1 className=' text-[18px] font-[600] text-white ml-2'>Downtown Dubai</h1>
            <p className=' text-[13px] font-[400] text-white mx-2'>Lorem ipsum dolor sit amet consectetur. Non id felis ut pellentesque sed duis cursus feugiat nullam. Metus in commodo viverra ut. Adipiscing ut sollicitudin </p>
        </div>
       </div>

       <div className=''>
       <Image src={comunity1} className=' w-full' alt='image' />
        <div className=' bg-black py-6 flex flex-col gap-5'>
            <button className=' py-2 px-5 text-white bg-[#AE8E50] text-[14px] font-[600] w-fit'>From 1,060,000 AED</button>
            <h1 className=' text-[18px] font-[600] text-white ml-2'>Downtown Dubai</h1>
            <p className=' text-[13px] font-[400] text-white mx-2'>Lorem ipsum dolor sit amet consectetur. Non id felis ut pellentesque sed duis cursus feugiat nullam. Metus in commodo viverra ut. Adipiscing ut sollicitudin </p>
        </div>
       </div>

       <div className=''>
       <Image src={comunity2} className=' w-full' alt='image' />
        <div className=' bg-black py-6 flex flex-col gap-5'>
            <button className=' py-2 px-5 text-white bg-[#AE8E50] text-[14px] font-[600] w-fit'>From 1,060,000 AED</button>
            <h1 className=' text-[18px] font-[600] text-white ml-2'>Downtown Dubai</h1>
            <p className=' text-[13px] font-[400] text-white mx-2'>Lorem ipsum dolor sit amet consectetur. Non id felis ut pellentesque sed duis cursus feugiat nullam. Metus in commodo viverra ut. Adipiscing ut sollicitudin </p>
        </div>
       </div>

       <div className=''>
       <Image src={comunity3} className=' w-full' alt='image' />
        <div className=' bg-black py-6 flex flex-col gap-5'>
            <button className=' py-2 px-5 text-white bg-[#AE8E50] text-[14px] font-[600] w-fit'>From 1,060,000 AED</button>
            <h1 className=' text-[18px] font-[600] text-white ml-2'>Downtown Dubai</h1>
            <p className=' text-[13px] font-[400] text-white mx-2 '>Lorem ipsum dolor sit amet consectetur. Non id felis ut pellentesque sed duis cursus feugiat nullam. Metus in commodo viverra ut. Adipiscing ut sollicitudin </p>
        </div>
       </div>

       
    </div>
 </div>
  )
}

export default Community