"use client";
import Image from "next/image";
import React from "react";
import Gc from "../../../public/assets/GC.png";
import what from "../../../public/assets/what.png";
import Chat from "../../../public/assets/chat.png";
import { useCartStore } from "../../store/cart-store";
import WhatsApp from "../Modals/WhatsApp";
import ChatRobot from "../Modals/ChatRobot";
const GC = () => {
  const { openModal, openChat } = useCartStore((state) => state);
  return (
    <div className=" w-[90%] mx-auto relative">
      <div className="  bg-black py-12 px-12 flex items-center justify-between rounded-xl mt-32">
        <div className=" flex flex-col gap-4 w-1/2">
          <div className=" flex flex-col gap-3">
            <h1 className=" text-[#DDB464] text-[35px] font-[600]">
              Do you need to transfer currency overseas
            </h1>
            <p className=" text-[18px] font-[400] text-white">
              We are proud to partner with GC Partners, our trusted foreign
              exchange specialists boasting over 20 years’ industry experience
              and a passion to deliver exceptional customer service.
            </p>
            <p className=" text-[18px] font-[400] text-white">
              Whether you are embarking on your first property purchase or
              seeking to repatriate funds following a property sale, GC Partners
              is here to help you in identifying solutions that mitigate
              currency risk and maximize your savings.
            </p>
          </div>
          <div className=" mt-8">
            <h1 className=" text-[#DDB464] text-[35px] font-[600]">
              Why we recommend GC Partners
            </h1>
            <ul className=" flex flex-col gap-5 mt-6">
              <li className=" list-disc text-[18px] font-[400] text-white">
                Competitive exchange rates with no hidden transfer fees or
                charges
              </li>
              <li className=" list-disc text-[18px] font-[400] text-white">
                A variety of contract options to help mitigate your currency
                risk
              </li>
              <li className=" list-disc text-[18px] font-[400] text-white">
                Regular monthly payment options (bills, school fees, mortgage,
                etc.)
              </li>
              <li className=" list-disc text-[18px] font-[400] text-white">
                Authorized and regulated by the Financial Conduct Authority
                (FCA)
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <Image src={Gc} alt="gc" />
          <div className=" mt-40">
            <ul className=" flex flex-col gap-5">
              <li className=" list-disc text-[18px] font-[400] text-white">
                Your own dedicated account manager
              </li>
              <li className=" list-disc text-[18px] font-[400] text-white">
                24-hour online trading platform
              </li>
              <li className=" list-disc text-[18px] font-[400] text-white">
                Online rate alert service
              </li>
            </ul>
          </div>
        </div>
      </div>
     <div>
     <button
        onClick={openModal}
        className="absolute right-0 w-[50px] mt-5 "
      >
        <Image src={Chat} width={50} alt="chat" />
      </button>
      <button
        onClick={openChat}
        className=" absolute right-[6rem] w-[50px] mt-5"
      >
        <Image src={what} width={50} alt="what" />
      </button>
     </div>
      <WhatsApp />
      <ChatRobot />
    </div>
  );
};

export default GC;
