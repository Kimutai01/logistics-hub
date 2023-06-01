import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./HomeSlider.css";
import Slider1 from "/slider1.png";
import Slider2 from "/slider2.png";
import Slider3 from "/slider3.png";

// import required modules
import { Navigation } from "swiper";
const HomeSlider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="flex gap-10 px-20 items-center">
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
        </SwiperSlide>
        <SwiperSlide className="flex gap-10 px-20 items-center">
          <img src={Slider1} alt="slider1" className="py-10" />
          <div>
            <h3 className="font-sans font-bold text-2xl mb-10">
              Freight logistics
            </h3>
            <p className="font-light text-xl uppercase mb-5">
              We provide the following freight logistics services:
            </p>
            <ul className="font-light text-xl list-disc list-inside uppercase">
              <li>Air and ocean transport</li>
              <li>Import and export</li>
              <li>Break bulk and worldwide consolidation</li>
              <li>Perishable logistics</li>
              <li>Comprehensive quotation</li>
              <li>Consultation</li>
              <li>Project logistics</li>
            </ul>
            <button className="bg-gradient-to-b from-blue-900 to-pink-300 uppercase p-3 rounded-xl text-white mt-10">
              make an inquiry
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex gap-10 px-20 items-center">
          <img src={Slider2} alt="slider1" className="py-5" />
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
        </SwiperSlide>
        <SwiperSlide className="flex gap-10 px-20 items-center">
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
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
