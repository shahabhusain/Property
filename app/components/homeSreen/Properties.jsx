"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import like from "../../../public/assets/likes.png";
import dislike from "../../../public/assets/like.png";
import {useCartStore} from "@/app/store/cart-store";

const Properties = () => {
  const router = useRouter();
  const { cart, toggleCart } = useCartStore();
  const [visibleItemsCount, setVisibleItemsCount] = useState(6); // Start with 6 items
   const { properties,fetchProperties } = useCartStore(state=>state);

useEffect(()=>{
  fetchProperties()
},[fetchProperties])
  

  const handleNavigate = (id) => {
    router.push(`/home/${id}`);
  };

  const isProductInCart = (item) => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };

  const handleShowMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + 6);
  };

  const handleShowLess = () => {
    setVisibleItemsCount(6);
  };

  return (
    <div className="flex flex-col justify-center gap-12 items-center">
      {/* Property cards grid */}
      <div className="pt-[12rem] w-[92%] mx-auto grid grid-cols-3 gap-4">
        {properties?.properties?.slice(0, visibleItemsCount).map((item) => (
          <div
            key={item._id}
            className="relative w-[445px] group cursor-pointer"
            onClick={() => handleNavigate(item._id)}
          >
            <Image width={444} height={785} src={item.image} alt="Property" />
            <div className="absolute top-[8rem] left-5 bg-[#5f5b5bb5] py-3 px-5 w-[398px] rounded-md transition-colors duration-300 group-hover:bg-black">
              <h1 className="text-[18px] font-[600] text-white max-w-[355px]">
              {item.title?.split(" ").slice(0, 3).join(" ")}...
              </h1>
              <p className="text-[13px] font-[300] text-white mt-4">{item.location}</p>
              <div className="flex items-center justify-between gap-4 mt-4">
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon3} alt="Beds" /> {item.number_of_bedrooms}
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon2} alt="Baths" /> {item.number_of_bathrooms}
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon1} alt="Sqft" /> {item.size_in_sq_ft} sq.ft
                </span>
                <button className="py-2 px-2 rounded-md bg-[#AE8E50] text-white">
                  {item.price}
                </button>
              </div>
            </div>
            <button
              className="absolute top-6 right-6 w-[40px]"
              onClick={(e) => {
                e.stopPropagation(); // Prevents the parent onClick from firing
                toggleCart(item); // Toggles the item in the cart
              }}
            >
              {isProductInCart(item) ? (
                <Image src={like} alt="liked" />
              ) : (
                <Image src={dislike} alt="not liked" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Show More / Show Less button */}
      {visibleItemsCount < properties?.properties?.length ? (
        <button
          className="text-white bg-[#AE8E50] py-2 w-fit px-12"
          onClick={handleShowMore}
        >
          Show More
        </button>
      ) : visibleItemsCount > 6 ? (
        <button
          className="text-white bg-[#AE8E50] py-2 w-fit px-12"
          onClick={handleShowLess}
        >
          Show Less
        </button>
      ) : null}
    </div>
  );
};

export default Properties;
