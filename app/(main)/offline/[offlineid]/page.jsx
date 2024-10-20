import React from 'react'
import {OfflinePropertiesData} from '../../../lib/StaticData'
import Image from 'next/image';
import main from '../../../../public/assets/main.png'
import main1 from '../../../../public/assets/main1.png'
import main2 from '../../../../public/assets/main2.png'
import main3 from '../../../../public/assets/main3.png'
import main4 from '../../../../public/assets/main4.png'
import scan from '../../../../public/assets/scan.png'
import off from '../../../../public/assets/offplane.png'
import Register from '@/app/components/homeSreen/Register';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaWhatsapp } from "react-icons/fa";

const OfflineDetail = ({params}) => {
    const {offlineid: id} = params
    const property = OfflinePropertiesData.find((item) => item.id = id )

    if(!property){
        console.log("Property not found")
        return <div><h1>Property not found</h1></div>
    }
  return (
    <div className=' mt-32 relative w-full'>
      <div className=' flex items-center justify-between w-[92%] mx-auto'>
      <p className=" text-[18px] font-[500] text-black flex items-center gap-2"> <span><FaArrowLeftLong /></span> Back to Search</p>
      <span className=' flex flex-col gap-1'>
        <button className=' border-[#AE8E50] border-[1px] w-fit text-[#000] text-[15px] font-[300] py-2 px-5 rounded-md '>Starting From</button>
        <h1 className=' text-[#AE8E50] font-[700] text-[30px]'>AED 6,000,000</h1>
      </span>
      </div>
        <div className=' mt-12 '>
          <Image src={off} alt='off' />
          <div className=' flex flex-col gap-8 w-[90%] mx-auto pt-32 absolute top-[14rem] left-8'>
          <h1 className=' text-[45px] font-[600] text-white'>Haya on the Park</h1>
           <p className=' text-[20px] font-[400] text-white max-w-[555px]'>Lorem ipsum dolor sit amet consectetur. Est turpis varius mauris faucibus urna gravida metus sit. Nullam amet id aliquam tortor. Odio lectus rutrum ses.</p>
           <div className=' flex items-center gap-3'>
            <button className=' py-3 px-6 rounded-full bg-[black] text-white'>Register Your Interest </button>
            <button className=' py-3 px-6 rounded-full bg-[#AE8E50] text-white flex items-center gap-2'><span className=' text-[20px] text-[#18FF6F]'><FaWhatsapp /></span> Click to Whatsapp</button>
           </div>
          </div>
        </div>
        <div className='w-[90%] mx-auto flex justify-between gap-12 mt-12'>
          <div className=' w-1/2 flex flex-col gap-6'>
            <p>Lorem ipsum dolor sit amet consectetur. Est turpis varius mauris faucibus urna gravida metus sit. Nullam amet id aliquam tortor. Odio lectus rutrum sit volutpat at. Mattis dui arcu a lacus tristique. Dictum cursus morbi mauris a a ultrices.
            Proin fringilla at suscipit tempor ridiculus. Ultricies dictum dolor feugiat elit lorem quam at pellentesque. Tellus porttitor venenatis amet at non sit auctor augue. In mi bibendum proin volutpat neque morbi malesuada vulputate. Est eros tempor euismod diam. Et arcu pretium mattis facilisis id</p>
            <p>Consequat dictumst semper non adipiscing netus. Tortor ornare neque venenatis tempus ornare quam. Sed lorem at vitae adipiscing. Sed ipsum tincidunt egestas tempor. Aliquam vulputate iaculis odio tristique viverra. Ut aliquet integer sagittis venenatis pretium. Donec fermentum donec sagittis est. Senectus lectus tincidunt faucibus sapien</p>
            <p>Lorem ipsum dolor sit amet consectetur. Est turpis varius mauris faucibus urna gravida metus sit. Nullam amet id aliquam tortor. Odio lectus rutrum sit volutpat at. Mattis dui arcu a lacus tristique. Dictum cursus morbi mauris a a ultrices.</p>
            <div className=" flex items-center justify-between gap-5 mt-24">
                <h1 className=" flex flex-col gap-1 items-center bg-[#AE8E50] py-5 px-5 rounded-md w-[40%] h-[120px]">
                  <span className=' text-black text-[30px] font-[500]'>10 %</span>
                  <span className=' text-[13px] font-[300] text-black'>Downpayment + 4% DLD</span>
                </h1>
                <h1 className=" flex flex-col gap-1 items-center bg-[#AE8E50] py-5 px-5 rounded-md w-[40%] h-[120px]">
                  <span className=' text-black text-[30px] font-[500]'>75 %</span>
                  <span className=' text-[13px] font-[300] text-black'>During Construction 1st to 8th Installment</span>
                </h1>
                <h1 className=" flex flex-col gap-1 items-center bg-[#AE8E50] py-5 px-5 rounded-md w-[40%] h-[120px]">
                   <span className=' text-black text-[30px] font-[500]'>15 %</span>
                  <span className=' text-[13px] font-[300] text-black'>On Handover</span>
                </h1>
              </div>
          </div>

          <div className=' w-1/2'>
          <div className="bg-[#F7F7F7] h-full rounded-md flex flex-col gap-6 px-4 py-5 ">
              <h1 className="text-[30px] font-[700] text-[#AE8E50]">Details & Description</h1>
              <div className=" h-[1px] w-full bg-[#AE8E50]"></div>
              <div className=" flex flex-col gap-3">
              <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Location <span className=" font-[600]">1,400 sq.ft</span></h1>
              <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Development Type <span className=" font-[600]">200 sq.ft</span></h1>
              <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Completion Date <span className=" font-[600]">5</span></h1>
              <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Prices From <span className=" font-[600]">4</span></h1>
              <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Furnished <span className=" font-[600]">No</span></h1>

              <h1 className="text-[30px] font-[700] text-[#000] mt-3">Ammenties</h1>
              <div className=" h-[1px] w-full bg-[#D9D9D9]"></div>
              <div className=" flex flex-col gap-3">
              <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Metro Access <span className=" font-[600]">Enterance Door</span></h1>
              <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Green Area<span className=" font-[600]">Inside Street</span></h1>
              <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Jogging Area<span className=" font-[600]">Jogging Area</span></h1>

              <div className=" flex items-center justify-between gap-24 bg-black py-10 mt-5 px-5 rounded-md">
              <Image src={scan} alt='scan' />
              <div className=" flex flex-col gap-3">
                <h1 className=" text-white font-[500] text-[18px]">This Listing has been verified by Dubai Land Department.</h1>
                <p className=" underline text-white text-[18px] font-[500]">Read more</p>
              </div>
            </div>
              </div>
               </div>
          </div>
          </div>
        </div>
        <div className=' mt-24'>
          <Image src={main} alt="main" />
          <div className=' grid grid-cols-4 mt-3'>
          <Image src={main1} alt='main1' />
          <Image src={main2} alt='main2' />
          <Image src={main3} alt='main3' />
          <Image src={main4} alt='main4' />
          </div>
        </div>

        <div className=' mt-24'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0327106585!2d54.89782944320242!3d25.075658397134212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1728842208065!5m2!1sen!2s"
    width="1515"
    height="600"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

<div>
  <Register />
</div>

    </div>
  )
}

export default OfflineDetail