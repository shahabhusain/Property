import React from "react";
import Properties from "../../components/homeSreen/Properties";
import Image from "next/image";
import select from "../../../public/assets/select.svg";
const InputField = () => {
  return (
    <div className=" relative ">
      <div className="absolute top-[-8rem] left-[24rem] ">
        <div className="flex items-center gap-4 justify-center ">
          <button className=" py-3 px-5 bg-[#AE8E50] rounded-full text-white">
            Dubai Property
          </button>
          <button className=" py-3 px-5 bg-[#fff] rounded-full text-black">
            Uk Property
          </button>
          <button className=" py-3 px-5 bg-[#fff] rounded-full text-black">
            Secret Property
          </button>
        </div>
        <div>
          <div className=" flex flex-col gap-4 items-center bg-[#AE8E50] w-[777px] py-6 px-5 rounded-md mt-6 ">
            <div className=" flex items-center gap-4 w-full">
              <input
                className=" py-2 px-3 w-full rounded-full"
                id="name"
                type="text"
                placeholder=" Enter Keyword"
              />
              {/*  */}
              <div className="relative w-[50%]">
                <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
                  <option value="Name">Type</option>
                  <option value="Email">Email</option>
                  <option value="Password">Password</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="image" />
                </span>
              </div>

              {/*  */}

              {/*  */}
              <div className="relative w-[50%]">
                <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
                  <option value="Name">Where</option>
                  <option value="Email">Email</option>
                  <option value="Password">Password</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="image" />
                </span>
              </div>
              {/*  */}
            </div>

            <div className=" w-full flex gap-4 items-center justify-between">
              {/*  */}
              <div className="relative w-full">
                <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
                  <option value="Name">Bed</option>
                  <option value="Email">Email</option>
                  <option value="Password">Password</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="image" />
                </span>
              </div>
              {/*  */}
              {/*  */}
              <div className="relative w-full">
                <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
                  <option value="Name">Bath</option>
                  <option value="Email">Email</option>
                  <option value="Password">Password</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="image" />
                </span>
              </div>
              {/*  */}

              {/*  */}
              <div className="relative w-full">
                <select className="appearance-none py-2 pl-3 pr-10 rounded-full w-full bg-white border border-gray-300">
                  <option value="Name">Max Price</option>
                  <option value="Email">Email</option>
                  <option value="Password">Password</option>
                </select>
                <span className="absolute top-0 right-3 bottom-0 flex items-center pointer-events-none">
                  <Image src={select} alt="image" />
                </span>
              </div>
              {/*  */}
              <button className=" py-2 px-5 text-white rounded-full bg-black w-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <Properties />
    </div>
  );
};

export default InputField;
