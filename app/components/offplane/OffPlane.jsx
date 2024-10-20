"use client";

import Image from "next/image";
import React, { useState } from "react";
import like from "../../../public/assets/like.png";
import likes from "../../../public/assets/likes.png";
import { OfflinePropertiesData } from "../../lib/StaticData";
import { useRouter } from "next/navigation";
import {useCartStore} from '../../store/cart-store'
import { AiOutlineMessage } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { VscCallOutgoing } from "react-icons/vsc";

const OffPlane = () => {
  const {cart1, toggleCart1} = useCartStore()
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = OfflinePropertiesData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(OfflinePropertiesData.length / itemsPerPage);

  const handleNavigate = (id) => {
      router.push(`/offline/${id}`);
  };

  const handleToggleCart = (item) =>{
    toggleCart1(item)
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (totalPages > maxPageNumbers) {
      if (startPage === 1) {
        endPage = maxPageNumbers;
      } else if (endPage === totalPages) {
        startPage = totalPages - (maxPageNumbers - 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`mx-1 px-3 py-1 rounded-md ${currentPage === i ? "bg-black text-white" : "bg-gray-200"}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <h1 className="text-black text-[18px] font-[500] py-5">Off Plan Properties in Dubai({OfflinePropertiesData.length})</h1>
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <div key={index} className="relative w-[445px] group cursor-pointer" onClick={() => handleNavigate(item.id)}>
            <Image src={item?.img} alt='image' />
            <div className="absolute top-[17rem] left-3.5 bg-[#5f5b5b98] py-6 px-5 rounded-md transition-colors duration-300 group-hover:bg-black flex flex-col gap-4">
              <h1 className=" text-[20px] font-[600] text-white flex items-center justify-between">{item.title} <span>{item.price}</span></h1>
               <h2 className=" text-white text-[18px] font-[600]">{item.title1}</h2>
               <p className=" text-[15px] font-[300] text-white">{item.desc1}</p>
               <p className=" text-[15px] font-[300] text-white flex items-center justify-between">{item.descl} <span className=" text-[17px] font-[400]">{item.descr}</span></p>
               <p className=" text-[15px] font-[300] text-white flex items-center justify-between">{item.descl1}  <span className=" text-[17px] font-[400]">{item.descr1}</span></p>
               <div className=" flex items-center justify-between">
                <div className=" flex items-center gap-3">
                <button className=" bg-[#AE8E50] text-white hover:text-[#25D366] text-[20px] py-2 px-2 rounded-full"><VscCallOutgoing /></button>
                <button className=" bg-[#AE8E50] text-white hover:text-[#25D366] text-[20px] py-2 px-2 rounded-full"><AiOutlineMessage /></button>
                <button className=" bg-[#AE8E50] text-white hover:text-[#25D366] text-[20px] py-2 px-2 rounded-full"><FaWhatsapp /></button>
                </div>
                <button className=" text-[#fff] bg-[#AE8E50] py-2 px-5 rounded-md text-[12px] font-[600]">Find out more</button>
               </div>
            </div>
             <button onClick={(e) => {
              e.stopPropagation()
              handleToggleCart(item)
             }} className="absolute top-6 right-6 w-[40px]">
               {
                cart1.some((cartItem) => cartItem.id == item.id) ? (
                  <Image  src={likes} alt='image' />
                ) : (
                  <Image  src={like} alt='image' />
                )
               }
             </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 items-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-black mx-2"
        >
          Previous
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-black mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OffPlane;
