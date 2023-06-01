import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./HomeSlider.css";
import Slider1 from "/slider1.png";
import Slider2 from "/slider2.png";
import Slider3 from "/slider3.png";

const ItemsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const items = [
    { id: 1, text: "JINJA" },
    { id: 2, text: "KAMPALA" },
    { id: 3, text: "BUSIA" },
    { id: 4, text: "MALABA" },
    { id: 5, text: "ATHI RIVER" },
    { id: 6, text: "NAIROBI" },
    { id: 7, text: "MOMBASA" },
    { id: 8, text: "JINJA" },
    { id: 9, text: "KAMPALA" },
    { id: 10, text: "BUSIA" },
  ];

  return (
    <div className="mt-10">
      <Slider
        {...settings}
        className=" w-full bg-gradient-to-r from-blue-900 to-pink-300 px-4"
      >
        {items.map((item) => (
          <>
            <div key={item.id} className="flex items-center">
              <div className="w-1 h-10 bg-gray-400"></div>
              <h2 className="text-xl mx-10">{item.text}</h2>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default ItemsSlider;
