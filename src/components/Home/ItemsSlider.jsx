import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Slider1 from "/slider1.png";
import Slider2 from "/slider2.png";
import Slider3 from "/slider3.png";

const ItemsSlider = () => {
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
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        className=" w-[100%] bg-gradient-to-r from-blue-900 to-pink-300 "
      >
        {items.map((item) => (
          <>
            <SwiperSlide className="flex justify-center items-center">
              <div key={item.id} className="flex justify-center items-center">
                <div className="w-1 h-10 bg-gray-400"></div>
                <h2 className="text-xl mx-10">{item.text}</h2>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemsSlider;
