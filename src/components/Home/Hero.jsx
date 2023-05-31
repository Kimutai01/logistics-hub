import React from "react";

const Hero = () => {
  return (
    <div className="home-background">
      <img src="/rect.png" className="w-full" />
      <div className="absolute left-[10%] top-[44%]">
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
