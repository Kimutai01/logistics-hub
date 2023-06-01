import React from "react";
import { BsFillBuildingFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="flex gap-10 mt-[500px]">
        <div className="bg-[#ffff] w-[200px]">
          <div className="flex flex-start p-2">
            <BsFillBuildingFill size={25} color="gray" />
          </div>
          <h1 className="font-bold text-9xl text-center">7</h1>
          <p className="text-center font-medium uppercase text-xl">Sites</p>
        </div>
        <div className="bg-[#ffff] w-[450px]">
          <div className="flex flex-start p-2">
            <IoIosPeople size={35} color="gray" />
          </div>
          <h1 className="font-bold text-9xl text-center">250+</h1>
          <p className="text-center font-medium uppercase text-xl">Staff</p>
        </div>
        <div className="bg-[#ffff] w-[200px]">
          <div className="flex flex-start p-2">
            <FiSettings size={25} color="gray" />
          </div>
          <h1 className="font-bold text-9xl text-center">5</h1>
          <p className="text-center font-medium uppercase text-xl">
            TRANSPORT MODES
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
