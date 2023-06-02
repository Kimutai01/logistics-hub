import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import Slider1 from "/slider1.png";
import Slider2 from "/slider2.png";
import Slider3 from "/slider3.png";
import arrowbg from "/arrowbg.png";

// import required modules

const HomeSlider = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };
  return (
    <div>
      <Swiper className="swiper-container" loop={true}>
        <SwiperSlide className="flex justify-between   items-center">
          <p
            className="bg-no-repeat cursor-pointer flex items-center justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipeBack}
          >
            <IoIosArrowBack />
          </p>
          <img src={Slider1} alt="slider1" className="py-10" />
          <div>
            <h3 className="font-sans font-bold text-2xl mb-10">
              Tracks and Trailers
            </h3>
            <p className="font-light text-xl uppercase mb-5">
              Our trailers consist of:
            </p>
            <ul className="font-light text-xl list-disc list-inside uppercase">
              <li>Steel and coil carriers</li>
              <li>Flatbed trailers</li>
              <li>Tipper trailers</li>
              <li>LPG tanker trailers</li>
              <li>Standard low loaders</li>
              <li>Heavy lift modular trailers</li>
            </ul>
            <button className="bg-gradient-to-b from-blue-900 to-pink-300 uppercase p-3 rounded-xl text-white mt-10">
              make an inquiry
            </button>
          </div>
          <p
            className="bg-no-repeat flex items-center cursor-pointer justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipe}
          >
            <IoIosArrowForward />
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-between   items-center">
          <p
            className="bg-no-repeat cursor-pointer flex items-center justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipeBack}
          >
            <IoIosArrowBack />
          </p>
          <img src={Slider1} alt="slider1" className="py-10" />
          <div>
            <h3 className="font-sans font-bold text-2xl mb-10">
              Tracks and Trailers
            </h3>
            <p className="font-light text-xl uppercase mb-5">
              Our trailers consist of:
            </p>
            <ul className="font-light text-xl list-disc list-inside uppercase">
              <li>Steel and coil carriers</li>
              <li>Flatbed trailers</li>
              <li>Tipper trailers</li>
              <li>LPG tanker trailers</li>
              <li>Standard low loaders</li>
              <li>Heavy lift modular trailers</li>
            </ul>
            <button className="bg-gradient-to-b from-blue-900 to-pink-300 uppercase p-3 rounded-xl text-white mt-10">
              make an inquiry
            </button>
          </div>
          <p
            className="bg-no-repeat flex items-center cursor-pointer justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipe}
          >
            <IoIosArrowForward />
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-between   items-center">
          <p
            className="bg-no-repeat cursor-pointer flex items-center justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipeBack}
          >
            <IoIosArrowBack />
          </p>
          <img src={Slider1} alt="slider1" className="py-10" />
          <div>
            <h3 className="font-sans font-bold text-2xl mb-10">
              Tracks and Trailers
            </h3>
            <p className="font-light text-xl uppercase mb-5">
              Our trailers consist of:
            </p>
            <ul className="font-light text-xl list-disc list-inside uppercase">
              <li>Steel and coil carriers</li>
              <li>Flatbed trailers</li>
              <li>Tipper trailers</li>
              <li>LPG tanker trailers</li>
              <li>Standard low loaders</li>
              <li>Heavy lift modular trailers</li>
            </ul>
            <button className="bg-gradient-to-b from-blue-900 to-pink-300 uppercase p-3 rounded-xl text-white mt-10">
              make an inquiry
            </button>
          </div>
          <p
            className="bg-no-repeat flex items-center cursor-pointer justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipe}
          >
            <IoIosArrowForward />
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-between   items-center">
          <p
            className="bg-no-repeat cursor-pointer flex items-center justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipeBack}
          >
            <IoIosArrowBack />
          </p>
          <img src={Slider1} alt="slider1" className="py-10" />
          <div>
            <h3 className="font-sans font-bold text-2xl mb-10">
              Tracks and Trailers
            </h3>
            <p className="font-light text-xl uppercase mb-5">
              Our trailers consist of:
            </p>
            <ul className="font-light text-xl list-disc list-inside uppercase">
              <li>Steel and coil carriers</li>
              <li>Flatbed trailers</li>
              <li>Tipper trailers</li>
              <li>LPG tanker trailers</li>
              <li>Standard low loaders</li>
              <li>Heavy lift modular trailers</li>
            </ul>
            <button className="bg-gradient-to-b from-blue-900 to-pink-300 uppercase p-3 rounded-xl text-white mt-10">
              make an inquiry
            </button>
          </div>
          <p
            className="bg-no-repeat flex items-center cursor-pointer justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipe}
          >
            <IoIosArrowForward />
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-between   items-center">
          <p
            className="bg-no-repeat cursor-pointer flex items-center justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipeBack}
          >
            <IoIosArrowBack />
          </p>
          <img src={Slider1} alt="slider1" className="py-10" />
          <div>
            <h3 className="font-sans font-bold text-2xl mb-10">
              Tracks and Trailers
            </h3>
            <p className="font-light text-xl uppercase mb-5">
              Our trailers consist of:
            </p>
            <ul className="font-light text-xl list-disc list-inside uppercase">
              <li>Steel and coil carriers</li>
              <li>Flatbed trailers</li>
              <li>Tipper trailers</li>
              <li>LPG tanker trailers</li>
              <li>Standard low loaders</li>
              <li>Heavy lift modular trailers</li>
            </ul>
            <button className="bg-gradient-to-b from-blue-900 to-pink-300 uppercase p-3 rounded-xl text-white mt-10">
              make an inquiry
            </button>
          </div>
          <p
            className="bg-no-repeat flex items-center cursor-pointer justify-center w-[60px] h-[446px] bg-center bg-contain text-4xl font-bold text-white"
            style={{
              backgroundImage: `url(${arrowbg})`,
            }}
            onClick={swipe}
          >
            <IoIosArrowForward />
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
