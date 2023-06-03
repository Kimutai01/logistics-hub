import React from "react";
import Companies from "./Company";
import { Link } from "react-router-dom";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="mt-[400px]">
        <img src="/rect.png" className="w-full mt-10 absolute " />
        <div className="flex pb-20 justify-end">
          <div className="bg-[#fff] absolute text-black shadow-lg shadow-black text-lg uppercase flex  items-center w-[300px] flex-row mr-60 px-5 py-10 rounded-lg mx-32 z-30">
            <div className="ml-[-35px] mr-5">
              <img src="/ellipse.png" alt="" srcset="" />
            </div>
            Our clients
          </div>
        </div>
      </div>

      <Companies />

      <div className="bg-gradient-to-b from-[#fff] to-[#1b25bc] bg-opacity-57 ">
        <div className="flex gap-5 justify-center items-center">
          <img src="/image1.png" alt="" />
          <Link
            className="text-[#000] w-[15%] font-light uppercase text-xl"
            to="/"
          >
            Logistics hub <span className="font-bold">Limited</span>
          </Link>
        </div>
        <div className="flex justify-between mt-12 mx-20">
          <div className="flex items-center">
            <FaPhoneAlt size={25} />
            <a href="tel:0790342234">0790345343</a>
          </div>
          <div className="flex items-center">
            <div className="flex">
              <MdLocationOn className="" size={25} />
              <MdLocationOn size={25} className="mt-2" />
            </div>
            <a href="tel:0790342234">0790345343</a>
          </div>
          <div className="flex">
            <MdEmail size={25} />
            <a href="tel:0790342234">0790345343</a>
          </div>
        </div>
        <hr className=" flex justify-center mt-10  my-3 mx-80" />
        <div className="flex justify-between mx-40">
          <div>Privacy policy</div>
          <div>Privacy policy</div>
          <div>Privacy policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
