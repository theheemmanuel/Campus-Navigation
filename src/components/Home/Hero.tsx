import Image from "next/image";
import React from "react";
import homeBG from "../../../public/home_bg.png";

const Hero: React.FC = () => {
  return (
    <div className="maxWidth">
      <div className="flex gap-6 items-center px-6 py-18">
        <div className="lg:w-1/2 ">
          <p className="text-[#2d3142] text-lg uppercase">
            Redeemers University Smart Campus Navigation System
          </p>
          <h1 className="font-black text-[#000079] text-7xl my-6">
            Never Lost, Always on Time
          </h1>
          <p>
            Get turn-by-turn guidance to any classroom, office, or campus
            facility.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={homeBG}
            alt="home image"
            className="relative rounded-[30px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform perspective-[1000px] -rotate-y-[5deg] transition-all duration-500 bg-[#f5f7fa] p-5"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default Hero;
