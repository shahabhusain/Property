"use client";

import React, { useState } from "react";
import Properties from "../../components/homeSreen/Properties";
import Image from "next/image";
import select from "../../../public/assets/select.svg";
import { useCartStore } from "@/app/store/cart-store";

const InputField = () => {
  const [name, setName] = useState("");
  const [bath, setBath] = useState("");
  const [bed, setBed] = useState("");
  const [price, setPrice] = useState("");
  const [where, setWhere] = useState("");

  const { searchProperties, properties } = useCartStore();

  const handleSearch = () => {
    const params = {
      title: name,
      location: where,
      bed:bed,
      bath:bath,
      price:price,
    };
    searchProperties(params)
    console.log("property", properties)
  };

  return (
    <div className="relative">
      <div className="absolute top-[-8rem] left-[24rem]">
        {/* Buttons */}
        <div className="flex items-center gap-4 justify-center">
          <button className="py-3 px-5 bg-[#AE8E50] rounded-full text-white">
            Dubai Property
          </button>
          <button className="py-3 px-5 bg-[#fff] rounded-full text-black">
            UK Property
          </button>
          <button className="py-3 px-5 bg-[#fff] rounded-full text-black">
            Secret Property
          </button>
        </div>

        {/* Search Form */}
        <div>
          <div className="flex flex-col gap-4 items-center bg-[#AE8E50] w-[777px] py-6 px-5 rounded-md mt-6">
            <div className="flex items-center gap-4 w-full">
              <input
                className="py-2 px-3 w-full rounded-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Keyword"
              />

              {/* Location Select */}
              <div className="relative w-[50%]">
                <select
                  value={where}
                  onChange={(e) => setWhere(e.target.value)}
                  className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300"
                >
                  <option value="">Where</option>
                  <option value="Dubai">Dubai</option>
                  <option value="London">London</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="Select" />
                </span>
              </div>
            </div>

            {/* Bed, Bath, Price */}
            <div className="w-full flex gap-4 items-center justify-between">
              {/* Bed */}
              <div className="relative w-full">
                <select
                  value={bed}
                  onChange={(e) => setBed(e.target.value)}
                  className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300"
                >
                  <option value="">Bed</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="Select" />
                </span>
              </div>

              {/* Bath */}
              <div className="relative w-full">
                <select
                  value={bath}
                  onChange={(e) => setBath(e.target.value)}
                  className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300"
                >
                  <option value="">Bath</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="Select" />
                </span>
              </div>

              {/* Price */}
              <div className="relative w-full">
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300"
                >
                  <option value="">Max Price</option>
                  <option value="1000000">AED 1M</option>
                  <option value="2000000">AED 2M</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="Select" />
                </span>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="py-2 px-5 text-white rounded-full bg-black w-full"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Component */}
      <Properties data={properties} />

    </div>
  );
};

export default InputField;
