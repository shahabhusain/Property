"use client";

import React, { useState } from "react";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import like from "../../../public/assets/like.png";
import likes from "../../../public/assets/likes.png";
import Image from "next/image";
import { useCartStore } from "../../store/cart-store";
import { VscCallOutgoing } from "react-icons/vsc";
import { AiOutlineMessage } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const UserProfileLike = () => {
  const [likedCartItems, setLikedCartItems] = useState(new Set());
  const [likedOffPlanItems, setLikedOffPlanItems] = useState(new Set());
  const [open, setOpen] = useState(1);

  const { cart, cart1, removeCart, removeCart1, toggleCart, toggleCart1 } = useCartStore();

  // Toggle like for items in cart
  const handleToggleLikeCart = (itemId) => {
    setLikedCartItems((prevLikedItems) => {
      const newLikedItems = new Set(prevLikedItems);
      newLikedItems.has(itemId) ? newLikedItems.delete(itemId) : newLikedItems.add(itemId);
      return newLikedItems;
    });
  };

  // Toggle like for items in Off Plan Property
  const handleToggleLikeOffPlan = (itemId) => {
    setLikedOffPlanItems((prevLikedItems) => {
      const newLikedItems = new Set(prevLikedItems);
      newLikedItems.has(itemId) ? newLikedItems.delete(itemId) : newLikedItems.add(itemId);
      return newLikedItems;
    });
  };

  const handleRemoveFromCart = (productId) => {
    removeCart(productId); // Remove from main cart
    handleToggleLikeCart(productId); // Update liked items in the main cart
  };

  const handleRemoveFromOffPlan = (productId) => {
    removeCart1(productId); // Remove from off-plan cart
    handleToggleLikeOffPlan(productId); // Update liked items in the off-plan cart
  };

  // Render the items in the main cart (Want to Buy)
  const renderCartItems = () => (
    <div className="grid grid-cols-3 gap-6 my-7">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="relative w-[445px] group">
            <Image src={item.img} alt="property image" />
            <div className="absolute top-[24rem] left-5 bg-[#5f5b5b98] py-6 px-5 rounded-md transition-colors duration-300 group-hover:bg-black">
              <h1 className="text-[18px] font-[600] text-white max-w-[355px]">
                {item.keyword}
              </h1>
              <p className="text-[13px] font-[300] text-white">{item.place}</p>
              <div className="flex items-center justify-between gap-4 mt-4">
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon3} alt="Bedrooms" /> {item.bed}
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon2} alt="Bathrooms" /> {item.bath}
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon1} alt="Sqft" /> {item.Sqft} sq.ft
                </span>
                <button className="py-2 px-2 rounded-md bg-[#AE8E50] text-white">
                  AED {item.maxprice}
                </button>
              </div>
            </div>
            <button
              className="absolute top-6 right-6 w-[40px]"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              <Image
                src={likedCartItems.has(item.id) ? like : likes}
                alt={likedCartItems.has(item.id) ? "liked" : "not liked"}
              />
            </button>
          </div>
        ))
      ) : (
        <p>No items in your cart.</p>
      )}
    </div>
  );

  // Render the Off-Plan Property section
  const renderOffPlanProperty = () => (
    <div className="grid grid-cols-3 gap-6 my-7">
      {cart1.length > 0 ? (
        cart1.map((item, index) => (
          <div key={index} className="relative w-[445px] group" onClick={() => handleNavigate(item.id)}>
            <Image src={item?.img} alt="image" />
            <div className="absolute top-[17rem] left-2 bg-[#5f5b5b98] py-6 px-5 rounded-md transition-colors duration-300 group-hover:bg-black flex flex-col gap-4">
              <h1 className="text-[20px] font-[600] text-white flex items-center justify-between">
                {item.title} <span>{item.price}</span>
              </h1>
              <h2 className="text-white text-[18px] font-[600]">{item.title1}</h2>
              <p className="text-[15px] font-[300] text-white">{item.desc1}</p>
              <p className="text-[15px] font-[300] text-white flex items-center justify-between">
                {item.descl} <span className="text-[17px] font-[400]">{item.descr}</span>
              </p>
              <p className="text-[15px] font-[300] text-white flex items-center justify-between">
                {item.descl1} <span className="text-[17px] font-[400]">{item.descr1}</span>
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="bg-[#AE8E50] text-white py-2 px-2 rounded-full">
                    <VscCallOutgoing />
                  </button>
                  <button className="bg-[#AE8E50] text-white py-2 px-2 rounded-full">
                    <AiOutlineMessage />
                  </button>
                  <button className="bg-[#AE8E50] text-white py-2 px-2 rounded-full">
                    <FaWhatsapp />
                  </button>
                </div>
                <button className="text-[#fff] bg-[#AE8E50] py-2 px-5 rounded-md text-[12px] font-[600]">
                  Find out more
                </button>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleCart1(item);
              }}
              className="absolute top-6 right-6 w-[40px]"
            >
              {cart1.some((cartItem) => cartItem.id === item.id) ? (
                <Image src={likes} alt="liked" />
              ) : (
                <Image src={like} alt="not liked" />
              )}
            </button>
          </div>
        ))
      ) : (
        <p>No off-plan properties available.</p>
      )}
    </div>
  );

  return (
    <div>
      <h1 className="text-[35px] text-black font-[500]">Properties you liked ({cart.length})</h1>
      <div className="flex items-center gap-6 my-7">
        <button
          onClick={() => setOpen(1)}
          className={`${open === 1 ? "bg-[#AE8E50] py-2 px-5 rounded-full text-white" : "border-[#AE8E50] border-[1px] py-2 px-5 rounded-full text-black"}`}
        >
          Want to Buy
        </button>
        <button
          onClick={() => setOpen(0)}
          className={`${open === 0 ? "bg-[#AE8E50] py-2 px-5 rounded-full text-white" : "border-[#AE8E50] border-[1px] py-2 px-5 rounded-full text-black"}`}
        >
          Off Plan
        </button>
      </div>

      {open === 1 ? renderCartItems() : renderOffPlanProperty()}
    </div>
  );
};

export default UserProfileLike;
