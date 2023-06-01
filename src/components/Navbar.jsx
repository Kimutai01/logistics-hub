import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";

import { BsChevronDown } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    setNavBg("#000");
    setLinkColor("#ecf0f3");
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showServicesDetails, setShowServicesDetails] = useState(false);
  const [showStoreDetails, setShowStoreDetails] = useState(false);

  const handleServicesClick = () => {
    setShowServicesDetails(!showServicesDetails);
  };
  const handleStoreClick = () => {
    setShowStoreDetails(!showStoreDetails);
  };

  return (
    <div
      style={{ backgroundColor: `${"transparent"}` }}
      className={
        shadow
          ? "fixed items-center px-10 w-full h-20 shadow-xl z-[100] "
          : "fixed w-full items-center h-20 py-10 z-[100] "
      }
    >
      <div className="flex gap-20 text-[#000] items-center w-full h-full md:px-4 py-4 px-2 2xl:px-16 rounded">
        <div className="flex items-center gap-5">
          <div>
            <Link className="text-[#000] font-bold text-3xl" to="/">
              <img src="/image1.png" alt="" srcset="" />
            </Link>
          </div>
          <Link
            className="text-[#000] w-[50%] font-light uppercase text-xl"
            to="/"
          >
            Logistics hub <span className="font-bold">Limited</span>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex md:gap-7" style={{ color: `#000` }}>
            <Link to="/">
              <li className="font-medium uppercase text-lg hover:text-[#a4a3de] transition-all duration-300">
                About
              </li>
            </Link>
            <Link to="/">
              <li className="font-medium uppercase text-lg hover:text-[#a4a3de] transition-all duration-300">
                services
              </li>
            </Link>
            <Link to="/">
              <li className="font-medium uppercase  text-lg hover:text-[#a4a3de] transition-all duration-300">
                Clients
              </li>
            </Link>
            <Link to="/about">
              <li className="font-medium uppercase text-lg hover:text-[#a4a3de] transition-all duration-300">
                About
              </li>
            </Link>

            <Link to="/contact">
              <li className="font-medium uppercase  text-lg hover:text-[#a4a3de] transition-all duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className="md:hidden flex justify-between items-center w-full h-full"
            onClick={handleNav}
            style={{ color: `${linkColor}` }}
          >
            <RiMenu5Line size={40} className="text-[#ff4d23] " />
          </div>
        </div>
        <div className="hidden md:flex">
          <div>
            <input
              type="text"
              className="p-2 rounded-full w-72  outline-none border-none bg-gradient-to-r from-[#a4a3de] to-[#f3d0e2] bg-opacity-57"
            />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-[#000] text-white p-2 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full mt-3 px-3">
              <Link className="font-bold text-4xl uppercase animate-pulse">
                Mechanic
              </Link>
              <div
                onClick={handleNav}
                className="cursor-pointer text-[#ff4d23]"
              >
                <AiOutlineClose size={35} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  py-4">
              <ul>
                <Link to="/" onClick={handleNav}>
                  <li className="ml-3 text-xl">Home</li>
                </Link>
                <li className="relative">
                  <div
                    className="flex items-center justify-between px-3 py-4 cursor-pointer"
                    onClick={handleServicesClick}
                  >
                    <div className="text-xl">Services</div>
                    <div>
                      <BsChevronDown size={25} className={``} />
                    </div>
                  </div>
                  {showServicesDetails && (
                    <ul className="left-full bg-[#000] py-2 rounded-lg shadow-lg">
                      <Link to="/services">
                        <li
                          className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200"
                          onClick={handleNav}
                        >
                          Services
                        </li>
                      </Link>
                      <Link to="/performance" onClick={handleNav}>
                        <li className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200">
                          Service Details
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>
                <Link to="/store" onClick={handleNav}>
                  <li className="ml-3 text-xl">Store</li>
                </Link>
                <Link to="/about" onClick={handleNav}>
                  <li className="py-4 text-xl ml-3 cursor-pointer">About</li>
                </Link>
              </ul>
              <div>
                <Link to="/contact">
                  <button className="uppercase text-[#fff] bg-[#808080] rounded-full hover:bg-[#ff4d23] font-bold p-4 mt-10 ml-4">
                    get an appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
