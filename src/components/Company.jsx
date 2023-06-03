import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from "swiper";

const Company = () => {
  const items = [
    { id: 1, image: "/proto.png" },
    { id: 2, image: "/Devki.png" },
    { id: 3, image: "/mea.png" },
    { id: 4, image: "/mitsui.png" },
    { id: 6, image: "/nitron.png" },
    { id: 7, image: "/Oillied.png" },
    { id: 8, image: "/one.png" },
    { id: 9, image: "/railways.png" },
    { id: 10, image: "/grain.png" },
    { id: 10, image: "/agol.png" },
  ];
  return (
    <div className="mt-28 mx-5">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 100, // Adjust the delay (in milliseconds) between slides
          disableOnInteraction: false, // Allow autoplay to continue even if the user interacts with the slider
        }}
        className="w-full h-full bg-gradient-to"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="flex items-center">
            <div className="flex h-[100px] items-center">
              <img src={item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Company;
