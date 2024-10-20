import Image from 'next/image'
import React from 'react'
import partner from '../../../public/assets/partner.png'
import partner2 from '../../../public/assets/partner1.png'
import partner3 from '../../../public/assets/partner2.png'
import { FaCaretRight } from "react-icons/fa";
const Partner = () => {
  return (
    <div className=' w-[92%] mx-auto mt-[12rem]'>
        <div className=' flex items-center justify-between'>
            <h1 className=' text-[35px] font-[600] text-[#AE8E50] max-w-[500px] '>Your Trusted Real Estae Partner in Dubai</h1>
            <p className=' text-[18px] font-[400] text-black w-1/2 '>Lorem ipsum dolor sit amet consectetur. Dui viverra magna auctor aliquet amet amet. Tristique in quam etiam aliquam rhoncus cras. Ac et felis sit sem eu. Mauris laoreet eget commodo bibendum risus scelerisque tempor. Facilisis malesuada felis lacus enim suspendisse gravida. Vestibulum tincidunt adipiscing egestas volutpat mattis odio magna. Massa curabitur tortor sed.</p>
        </div>

        <div className=' flex items-center justify-between gap-4 mt-32'>
        <div className=' flex items-center gap-12'>
          <Image src={partner} alt='image' />
          <div className=' flex flex-col gap-3 items-start'>
            <h1 className=' text-black text-[18px] font-[600]'>List your property</h1>
            <p className=' text-[16px] font-[300] text-black'>Looking to list your property for sale or rent?</p>
            <button className=' text-[#AE8E50] text-[15px] font-[400] flex items-center gap-2'>List your property <FaCaretRight /></button>
          </div>
        </div>

        <div className=' flex items-center gap-12'>
          <Image src={partner2} alt='image' />
          <div className=' flex flex-col gap-3 items-start'>
            <h1 className=' text-black text-[18px] font-[600]'>Speak to our team
            </h1>
            <p className=' text-[16px] font-[300] text-black'>Didn’t find what you’re looking for? We’d love to hear from you
            </p>
            <button className=' text-[#AE8E50] text-[15px] font-[400] flex items-center gap-2'>Get in touch <FaCaretRight />
            </button>
          </div>
        </div>

        <div className=' flex items-center gap-12'>
          <Image src={partner3} alt='image' />
          <div className=' flex flex-col gap-3 items-start'>
            <h1 className=' text-black text-[18px] font-[600]'>Living in Dubai</h1>
            <p className=' text-[16px] font-[300] text-black'>A look into the communities of Dubai</p>
            <button className=' text-[#AE8E50] text-[15px] font-[400] flex items-center gap-2'>Start exploring <FaCaretRight /></button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Partner