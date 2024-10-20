"use client";

import Image from "next/image";
import React, { useState } from "react";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import like from "../../../public/assets/like.png";
import likes from "../../../public/assets/likes.png";
import { BuyPropertiesData } from "../../lib/StaticData";
import { useCartStore } from "../../store/cart-store"; 
import { useRouter } from "next/navigation";

const BuyProperties = () => {
  const router = useRouter(); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { cart, toggleCart } = useCartStore();
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BuyPropertiesData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(BuyPropertiesData.length / itemsPerPage);

  const handleNavigate = (id) => {
    router.push(`/buy/${id}`);
  };

  const handleToggleCart = (item) => {
    toggleCart(item);
  };

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

    return (
      <>
        {currentPage > 3 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className="mx-1 px-3 py-1 rounded-md bg-gray-200"
            >
              1
            </button>
            {currentPage > 4 && <span className="mx-1">...</span>}
          </>
        )}
        {pageNumbers}
        {totalPages > 5 && currentPage + 2 < totalPages && (
          <>
            <span className="mx-1">...</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="mx-1 px-3 py-1 rounded-md bg-gray-200"
            >
              {totalPages}
            </button>
          </>
        )}
      </>
    );
  };

  return (
    <div className="mt-12 w-[92%] mx-auto">
      <h2 className="text-[18px] font-[500]">Properties For Sale In Dubai ({BuyPropertiesData.length})</h2>
      <h1 className="text-[35px] font-bold text-black">Exclusive Listings</h1>
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <div onClick={() => handleNavigate(item.id)} key={index} className="relative w-[445px] group mt-4 cursor-pointer">
            <Image src={item?.img} alt="image" />
            <div className="absolute top-[24rem] left-5 bg-[#5f5b5b98] py-6 px-5 rounded-md transition-colors duration-300 group-hover:bg-black">
              <h1 className="text-[18px] font-[600] text-white max-w-[355px]">{item.keyword}</h1>
              <p className="text-[13px] font-[300] text-white">{item.place}</p>
              <div className="flex items-center justify-between gap-4 mt-4">
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon3} alt="image" /> {item.bed}
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon2} alt="image" /> {item.bath}
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon1} alt="image" /> {item.Sqft} sq.ft
                </span>
                <button className="py-2 px-2 rounded-md bg-[#AE8E50] text-white">
                  AED {item.maxprice}
                </button>
              </div>
            </div>
            <button
              className="absolute top-6 right-6 w-[40px]"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleCart(item);
              }} 
            >
              {cart.some((cartItem) => cartItem.id === item.id) ? (
                <Image src={likes} alt="liked" />
              ) : (
                <Image src={like} alt="not liked" />
              )}
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

export default BuyProperties;
