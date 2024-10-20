"use client";

import Image from "next/image";
import React from "react";
import { BuyPropertiesData } from "../../../lib/StaticData";
import { similarData } from "../../../lib/StaticData";
import proDetail from "../../../../public/assets/proDetail.png";
import icons1 from "../../../../public/assets/bed.png";
import profile from "../../../../public/assets/profile.png";
import map from '../../../../public/assets/mapp.png'
import scan from '../../../../public/assets/scan.png'
import icon1 from "../../../../public/assets/icon1.png";
import icon2 from "../../../../public/assets/icon2.png";
import icon3 from "../../../../public/assets/icon3.png";
import like from "../../../../public/assets/like.png";
import like1 from "../../../../public/assets/like11.svg";
import share from "../../../../public/assets/share.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import area from '../../../../public/assets/area.svg'
import bath from '../../../../public/assets/bath.svg'
import { AiOutlineMessage } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { VscCallOutgoing } from "react-icons/vsc";

const PropertyDetail = ({ params }) => {
  const { propertiesid: id } = params;

  const property = BuyPropertiesData.find((item) => item.id == id);

  if (!property) {
    console.error("Property not found for ID:", id);
    return <div>Property not found!</div>;
  }

  return (
    <div className=" w-[90%] mx-auto mt-32">
    {/* <h1>Property Detail Page for ID: {id}</h1> */}
    <p className=" text-[18px] font-[500] text-black flex items-center gap-2"> <span><FaArrowLeftLong /></span> Back to Search</p>
<div className=" mt-12">
  <div className=" flex items-center justify-between">
    <h1 className=" text-[35px] font-[600] text-black max-w-[555px]">
      Spacious 3 Bedroom <span className="text-[#AE8E50]">|</span> Marina
      View <span className="text-[#AE8E50]">|</span> Expansive Balcony
    </h1>
    <div className=" flex flex-col items-start gap-1">
      <button className=" py-1 px-4 border-[1px] border-[#AE8E50] text-black rounded-md">
        Best Price
      </button>
      <h1 className=" text-[30px] font-[700] text-[#AE8E50]">
        AED 6,000,000
      </h1>
    </div>
  </div>
  <div className=" relative mt-3">
    <Image src={proDetail} alt="detail" />
    <div className=" flex items-center gap-5 absolute top-12 left-5">
      <button className=" bg-[#AE8E50] py-2 px-6 rounded-md text-white flex items-center gap-2">
        Like
        <span><Image src={like1} alt="like" /></span>
      </button>
      <button className="bg-[#000000BF] py-2 px-6 rounded-md text-white flex items-center gap-2">
        Share
        <span><Image src={share} alt="share" /></span>
      </button>
    </div>
  </div>
  <h1 className=" text-[16px] font-[300] mt-4">
    Posted on August 28th Views : 116 Saves : 9
  </h1>
  {/*  */}
  <div className=" flex justify-between mt-5">
    <div className=" w-[60%] bg-[#F7F7F7] px-5 py-4">
      <div className=" bg-[white]  rounded-md flex flex-col gap-6 py-4 px-4">
        <h1 className=" text-[#AE8E50] text-[35px] font-[600]">
          Overview & Description
        </h1>
        <div className=" h-[1px] w-full bg-[#AE8E50]"></div>
        <p className=" text-[#282828] text-[18px] font-[400]">
          Lorem ipsum dolor sit amet consectetur. Est turpis varius mauris
          faucibus urna gravida metus sit. Nullam amet id aliquam tortor.
          Odio lectus rutrum sit volutpat at. Mattis dui arcu a lacus
          tristique. Dictum cursus morbi mauris a a ultrices. Proin
          fringilla at suscipit tempor ridiculus. Ultricies dictum dolor
          feugiat elit lorem quam at pellentesque. Tellus porttitor
          venenatis amet at non sit auctor augue. In mi bibendum proin
          volutpat neque morbi malesuada vulputate. Est eros tempor
          euismod diam. Et arcu pretium mattis facilisis id. Consequat
          dictumst semper non adipiscing netus. Tortor ornare neque
          venenatis tempus ornare quam. Sed lorem at vitae adipiscing. Sed
          ipsum tincidunt egestas tempor. Aliquam vulputate iaculis odio
          tristique viverra. Ut aliquet integer sagittis venenatis
          pretium. Donec fermentum donec sagittis est. Senectus lectus
          tincidunt faucibus sapien.
        </p>
        <div className=" flex items-center justify-between px-12">
          <h1 className=" flex flex-col gap-1 items-center bg-[#AE8E50] py-5 px-5 rounded-md">
            <Image src={icons1} alt="icon" />
            <span>5 Bedrooms</span>
          </h1>
          <h1 className=" flex flex-col gap-1 items-center bg-[#AE8E50] py-5 px-5 rounded-md">
            <Image src={bath} alt="bath" />
            <span>3 Bathrooms</span>
          </h1>
          <h1 className=" flex flex-col gap-1 items-center bg-[#AE8E50] py-5 px-5 rounded-md">
            <Image src={area} alt="area" />
            <span>1,655 sq.ft Liveable Sapce</span>
          </h1>
        </div>
      </div>
      <div className="bg-[white]  rounded-md flex flex-col gap-6 py-4 px-4 mt-5">
        <h1 className="text-[30px] font-[700] text-[#AE8E50] pl-6">Interior</h1>
        <div className=" h-[1px] w-full bg-[#AE8E50]"></div>
        <div className=" flex flex-col gap-3 pr-[15rem] pl-6">
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Living area <span className=" font-[600]">1,400 sq.ft</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Living room surface <span className=" font-[600]">200 sq.ft</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Bedrooms <span className=" font-[600]">5</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Bathrooms <span className=" font-[600]">4</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Furnished <span className=" font-[600]">No</span></h1>
        </div>

        <h1 className="text-[30px] font-[700] text-[#AE8E50] pl-6">Exterior</h1>
        <div className=" h-[1px] w-full bg-[#AE8E50]"></div>
        <div className=" flex flex-col gap-3 pr-[15rem] pl-6">
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Gas, water & electricity <span className=" font-[600]">Yes</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Garden surface <span className=" font-[600]">38 sq.ft</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Terrace surface<span className=" font-[600]">15 sq.ft</span></h1>
        </div>
      </div>
      <div className=" bg-[white] rounded-md flex flex-col gap-6 py-4 px-4 mt-5">
      <h1 className="text-[30px] font-[700] text-[#AE8E50] pl-6">Ammenties</h1>
        <div className=" h-[1px] w-full bg-[#AE8E50]"></div>
        <div className=" flex flex-col gap-3 pr-[15rem] pl-6">
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Metro Access <span className=" font-[600]">Reading Area</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Green Area <span className=" font-[600]">Free Wifi Internet</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Enterance Door<span className=" font-[600]">Area Security</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Inside Street<span className=" font-[600]">24 Hour Electricity</span></h1>
        <h1 className=" text-[17px] font-[500] text-black flex items-center justify-between ">Jogging Area<span className=" font-[600]">Basketball Court</span></h1>
        </div>
      </div>
    </div>
    <div className=" w-[40%] bg-[#F7F7F7] px-5 py-4">
      <div>
        <div className=" bg-[white]  rounded-md flex flex-col gap-6 py-4 px-4">
          <h1 className=" text-[#AE8E50] text-[35px] font-[600]">
            Register your Interest
          </h1>
          <div className=" h-[1px] w-full bg-[#AE8E50]"></div>
          <p className=" text-[#282828] text-[18px] font-[400]">
            Lorem ipsum dolor sit amet consectetur. Est turpis varius
            mauris faucibus urna gravida metus sit. Nullam amet id aliquam
            tortor. Odio lectus rutrum sit volutpat at. Mattis dui arcu a
            lacus tristique. Dictum cursus morbi mauris a a ultrices.
          </p>
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-5">
            <div className=" flex items-center gap-3">
          <button className=" bg-[#AE8E50] text-white py-3 px-3 text-[18px] rounded-full"><VscCallOutgoing /></button>
          <button className=" bg-[#AE8E50] text-white py-3 px-3 text-[18px] rounded-full"><AiOutlineMessage /></button>
          <button className=" bg-[#AE8E50] text-white py-3 px-3 text-[18px] rounded-full"><FaWhatsapp /></button>
          </div>
            </div>
            <Image src={profile} alt="profile" />
          </div>
          <p className=" text-[#AE8E50] text-[18px] font-[500]">
            Please complete the following Questions to start your journey
          </p>
          <form className=" flex flex-col gap-3">
            <div className=" flex flex-col gap-2">
              <label className=" text-[14px] font-[400] text-[#393939]">
                What type of property are you looking to invest in?
              </label>
              <input
                className=" py-2 px-2 bg-[#F7F7F7] rounded-md"
                type="text"
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label className=" text-[14px] font-[400] text-[#393939]">
                How much liquid cash do you want to invest?
              </label>
              <select className="w-full py-2 px-3 border bg-[#F7F7F7] rounded-md">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
            </div>

            <div className=" flex flex-col gap-2">
              <label className=" text-[14px] font-[400] text-[#393939]">
                Full Name
              </label>
              
              <input
                className="py-2 px-2 bg-[#F7F7F7] rounded-md"
                type="text"
              />
           
            </div>

            <div className=" flex flex-col gap-2">
              <label className=" text-[14px] font-[400] text-[#393939]">
                Email
              </label>
              <input
                className="py-2 px-2 bg-[#F7F7F7] rounded-md"
                type="text"
              />
            </div>

            <div className=" flex items-center justify-between gap-3">
              <button className=" bg-[#AE8E50] py-2 px-5 rounded-md text-white w-full">
                Submit Details
              </button>
              <button className=" border-[1px] border-[#AE8E50] py-2 px-5 rounded-md w-full text-black">
                Book a Viewing
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" relative mt-5 ">
        <Image src={map} alt="map" />
         <button className=" py-2 px-5 rounded-md bg-[#AE8E50] text-white text-[18px] font-[400] absolute top-[9rem] left-[7rem]">Explore Location & ROI</button>
      </div>
      <div className=" flex items-center gap-6 bg-black py-10 mt-5 px-5 rounded-md">
        <Image src={scan} alt="scan" />
        <div className=" flex flex-col gap-3">
          <h1 className=" text-white font-[500] text-[16px]">This Listing has been verified by Dubai Land Department.</h1>
          <p className=" underline text-white text-[16px] font-[500]">Read more</p>
        </div>
      </div>
    </div>
  </div>
  {/*  */}
</div>

<div className=" mt-5">
  <h1 className=" text-black text-[28px] font-[500]">Similar Properties</h1>
  <div className=" flex items-center justify-between">
    {
      similarData.map((item, index)=>(
        <div key={index} className="relative w-[445px] group mt-4">
        <Image src={item?.img} alt='image' />
        <div className="absolute top-[24rem] left-5 bg-[#5f5b5b98] py-3 px-5 rounded-md transition-colors duration-300 group-hover:bg-black flex flex-col gap-3">
          <h1 className="text-[18px] font-[600] text-white max-w-[355px]">
            {item?.keyword}
          </h1>
          <p className="text-[13px] font-[300] text-white">{item.place}</p>
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
              <Image className="w-[20px]" src={icon3} alt='image' /> {item.bed}
            </span>
            <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
              <Image className="w-[20px]" src={icon2} alt='image' /> {item.bath}
            </span>
            <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
              <Image className="w-[20px]" src={icon1} alt='image' /> {item.Sqft} sq.ft
            </span>
            <button className="py-2 px-2 rounded-md bg-[#AE8E50] text-white">
              AED {item.maxprice}
            </button>
          </div>
        </div>
        <Image className="absolute top-6 right-6 w-[40px]" src={like} alt='image' />
      </div>
      ))
    }
  </div>
</div>
</div>
  );
};

export default PropertyDetail;
