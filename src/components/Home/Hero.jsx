import React from "react";

const Hero = () => {
  return (
    <div className="home-background">
      <img src="/rect.png" className="w-full mt-72" />
      <div className="absolute right-[3%] top-[20%] w-[400px] bg-gradient-to-b from-[transparent] to-[#1b25bc] bg-opacity-57 p-4">
        <h1 className="font-sans font-medium text-[#000] text-xl mon">
          Interested?
        </h1>
        <p className="font-sans uppercase">Request for quote</p>
        <hr className="w-[100%] my-2" />
        <form action="" className="flex flex-col gap-3">
          <input
            type="text"
            className="rounded-md p-1 outline-none border-none bg-[#fff]"
            placeholder="Name/company"
          />
          <input
            type="text"
            placeholder="Email address"
            className="rounded-md p-1 outline-none border-none bg-[#fff]"
          />
          <select
            name="select option"
            id=""
            className="rounded-md p-1 outline-none border-none bg-[#fff]"
          >
            <option value="">Select service</option>
            <option value="">Clearing and forwarding</option>
            <option value="">Transportation</option>
          </select>
          <p className="font-sans underline text-sm cursor-pointer">
            Complete Request For Quote Transaction
          </p>
          <div className="flex justify-between items-center">
            <p className="uppercase font-sans text-sm">More services?</p>
            <button className="bg-[#f8f8f8] p-1 rounded-lg uppercase font-sans font-light text-[#000]">
              Real time tracker
            </button>
          </div>
        </form>
      </div>
      <div className="absolute left-[10%] top-[63%]">
        <div className="bg-[#fff] text-black text-lg uppercase flex items-center flex-row  w-[60%] px-5 py-10 rounded-lg mx-32 z-30">
          <div className="ml-[-35px] mr-5">
            <img src="/ellipse.png" alt="" srcset="" />
          </div>
          Clearing and forwarding
        </div>
      </div>
    </div>
  );
};

export default Hero;
