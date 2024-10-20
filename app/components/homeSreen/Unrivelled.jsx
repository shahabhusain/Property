import Image from 'next/image'
import React from 'react'
import un from '../../../public/assets/un.png'
import icon1 from '../../../public/assets/un1.png'
import icon2 from '../../../public/assets/un2.png'
import icon3 from '../../../public/assets/un3.png'
import icon4 from '../../../public/assets/un4.png'
import icon5 from '../../../public/assets/un5.png'
import icon6 from '../../../public/assets/un6.png'
import icon7 from '../../../public/assets/un7.png'
import { VscCallOutgoing } from 'react-icons/vsc'
const Unrivelled = () => {
  return (
    <div className='w-[92%] mx-auto h-[100%] relative  rounded-xl mt-32'>
      <Image src={un} alt='image' />
       <div className='flex flex-col gap-32 py-14 px-14 absolute top-12'>
       <div className=' flex items-center justify-between'>
        <h1 className=' text-[35px] font-[600] text-black'>Why Dubai Stands Unrivalled?</h1>
        <button className=' py-2 px-5 text-white bg-[#AE8E50] flex gap-3 items-center'><span className='bg-[#000] text-white py-2 px-2 rounded-full'><VscCallOutgoing /></span> Contact Us Now </button>
      </div>

     <div className=' grid grid-cols-4 gap-12'>
        {/*  */}
        <div className=' flex flex-col gap-2'>
        <Image src={icon1} alt='image' />
        <h1 className=' text-[18px] font-[400] text-black'>Diversity</h1>
        <p className=' text-[13px] font-[400] text-[#4F4F4F]'>Approximately 90% of Dubai population consists of foreigners, reflecting its rich multicultural environment and tolerant attitude towards all.</p>
      </div>
        {/*  */}

          {/*  */}
          <div className=' flex flex-col gap-2'>
        <Image src={icon2} alt='image'/>
        <h1 className=' text-[18px] font-[400] text-black'>Safety</h1>
        <p className=' text-[13px] font-[400] text-[#4F4F4F]'>Dubai consistently leads global rankings as one of the safest cities worldwide. The Emirates also secured the second position according to dotal hans on the planet,</p>
      </div>
        {/*  */}

          {/*  */}
          <div className=' flex flex-col gap-2'>
        <Image src={icon3} alt='image' />
        <h1 className=' text-[18px] font-[400] text-black'>Stable Currency</h1>
        <p className=' text-[13px] font-[400] text-[#4F4F4F]'>The dirhams exchange rate has been firmly pegged to the dollar for over 20 years, ensuring stability and confidence in financial transactions.</p>
      </div>
        {/*  */}

          {/*  */}
          <div className=' flex flex-col gap-2'>
        <Image src={icon7} alt='image' />
        <h1 className=' text-[18px] font-[400] text-black'>Profit Tax Exemption for Residents</h1>
        <p className=' text-[13px] font-[400] text-[#4F4F4F]'>This includes income from rental properties, offering attractive incentives for property owners and investors.</p>
      </div>
        {/*  */}

          {/*  */}
          <div className=' flex flex-col gap-2'>
        <Image src={icon5} alt='image' />
        <h1 className=' text-[18px] font-[400] text-black'>Low Mortgage Rates</h1>
        <p className=' text-[13px] font-[400] text-[#4F4F4F]'>For non-residents, mortgage rates stand at an appealing 5-7%, providing accessible financing options for property purchases.</p>
      </div>
        {/*  */}

          {/*  */}
          <div className=' flex flex-col gap-2'>
        <Image src={icon6} alt='image' />
        <h1 className=' text-[18px] font-[400] text-black'>Remote Property Acquisition</h1>
        <p className=' text-[13px] font-[400] text-[#4F4F4F]'>Reach out to us, and we will assist you in selecting a worthy property while handling all transaction formalities. Moreover, with 0% commission.</p>
      </div>
        {/*  */}

          {/*  */}
          <div className=' flex flex-col gap-2'>
        <Image src={icon4} alt='image' />
        <h1 className=' text-[18px] font-[400] text-black'>Resident Visa Opportunities</h1>
        <p className=' text-[13px] font-[400] text-[#4F4F4F]'>Investing in real estate (starting from
          AED 750,000 or USD 204,000) offers the possibility of obtaining a resident visa.</p>
      </div>
        {/*  */}

     </div>
       </div>
    </div>
  )
}

export default Unrivelled