import Image from "next/image";
import Marquee from "react-fast-marquee";
import React from "react";
import homeBG from "../../../public/home_bg.png";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaLocationDot, FaBuilding, FaMapLocationDot } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { MdAssistantNavigation, MdExplore } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiHome4Fill } from "react-icons/ri";

const Hero: React.FC = () => {
  return (
    <div className="bg-light">
      <div className="maxWidth px-6 flex max-lg:text-center lg:flex-row flex-col gap-8 items-center lg:py-18 py-8">
        <div className="lg:w-1/2">
          <p className="md:text-xl uppercase font-semibold px-6">
            Redeemers University Smart Campus Navigation System
          </p>
          <h1 className="font-black text-accent md:text-6xl text-5xl my-6">
            Never Lost, Always on-Time
          </h1>
          <p className="text-lg   font-[400]">
            Get turn-by-turn guidance to any classroom, office, or campus
            facility.
          </p>
          <div className="flex max-lg:flex-col items-center justify-center gap-6 my-10 w-full">
            <Link
              href="/scan"
              className="flex items-center gap-2 text-white px-6 py-4 justify-center rounded-4xl font-bold text-g bg-linear-to-bl from-accent-light to-accent shadow-[0_10px_20px_rgba(0,0,121,0.2)] text-lg md:w-1/2 w-full"
            >
              Find Your Way
              <div>
                <BiRightArrowAlt />
              </div>
            </Link>
            <Link
              href="/map"
              className="flex items-center gap-2 border-accent border-2 text-accent px-5 py-4 justify-center rounded-4xl font-bold text-lg md:w-1/2 w-full text-center"
            >
              My Location on Map
              <div>
                <FaLocationDot />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap text-secondary">
            <div className="flex items-center gap-2">
              <div>
                <FaMapLocationDot />
              </div>
              <p>Interactive Maps</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaWalking />
              </div>
              <p>Walking Directions</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaBuilding />
              </div>
              <p>Building Info</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={homeBG}
            alt="home image"
            className="relative rounded-[30px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform perspective-[1000px] -rotate-y-[5deg] transition-all duration-500 bg-light p-5"
          />
        </div>
      </div>
      <Marquee
        direction="left"
        speed={100}
        gradient={false}
        className="bg-black p-4"
      >
        <div className="flex items-center gap-12 text-white font-semibold">
          <div className="flex items-center gap-2">
            <FaLocationDot size={20} />
            <p>Locate</p>
          </div>
          <div className="flex items-center gap-2">
            <MdAssistantNavigation size={20} />
            <p>Navigate</p>
          </div>
          <div className="flex items-center gap-2">
            <MdExplore size={20} />
            <p>Explore</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWalking size={20} />
            <p>Arrive</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineAccessTimeFilled size={20} />
            <p>On-Time</p>
          </div>
          <div className="flex items-center gap-2">
            <RiHome4Fill size={20} />
            <p>Discover</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot size={20} />
            <p>Locate</p>
          </div>
          <div className="flex items-center gap-2">
            <MdAssistantNavigation size={20} />
            <p>Navigate</p>
          </div>
          <div className="flex items-center gap-2">
            <MdExplore size={20} />
            <p>Explore</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWalking size={20} />
            <p>Arrive</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineAccessTimeFilled size={20} />
            <p>On-Time</p>
          </div>
          <div className="flex items-center gap-2">
            <RiHome4Fill size={20} />
            <p>Discover</p>
          </div>
          <div className="flex items-center gap-2"></div>
        </div>
      </Marquee>
    </div>
  );
};

export default Hero;
