"use client";

import React from "react";
import Image from "next/image";
import { FaCirclePlay, FaLocationDot } from "react-icons/fa6";
import chapel from "../../../public/sapetro.jpg";
import Link from "next/link";

interface CurrentLocationProps {
  locationId: string;
}

const CurrentLocation: React.FC<CurrentLocationProps> = ({ locationId }) => {
  const decodedLocationId = decodeURIComponent(locationId);

  return (
    <>
      <div className="flex justify-center text-center flex-col gap-6">
        <div className="bg-[#0000791a] text-accent flex items-center  w-fit mx-auto px-4 py-2 rounded-full gap-2 font-semibold">
          <FaLocationDot color="#000079" />
          You are here
        </div>
        <h1 className="font-bold md:text-5xl text-4xl text-accent">
          {decodedLocationId}
        </h1>
        <p className="text-secondary font-semibold text-lg">
          Your gateway to knowledge, resources, and academic excellence at
          Redeemer&apos;s University
        </p>
      </div>
      <div className="md:flex gap-8 my-12">
        <div className="md:w-1/2 md:sticky top-22 h-fit">
          <Image
            src={chapel}
            alt="chapel"
            placeholder="blur"
            className="rounded-2xl"
          />
        </div>
        <div className="md:w-1/2 rounded-2xl bg-white my-4 p-4">
          <div>
            <h1 className="text-accent font-bold text-2xl">
              About this location
            </h1>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              nemo deserunt accusantium natus officia pariatur expedita quaerat
              debitis in? Aut aspernatur labore nobis quia, nesciunt ipsum
              laboriosam! Quis dicta magnam illum, dignissimos accusantium qui
              omnis similique tempore! Quis, praesentium rerum, laudantium
              perferendis eum quasi maxime esse voluptatum repudiandae sed
              aliquid nostrum eveniet voluptatem quae nesciunt!
            </p>
          </div>
          <div>
            <h1 className="text-accent font-bold text-2xl mt-2">
              Contact Information
            </h1>
            <p className="">Email: library@run.edu.ng</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-accent font-bold text-4xl">Find Your Way</h1>
        <div className="h-1 w-16 mx-auto my-2 bg-accent justify-center"></div>
        <p className="text-secondary font-semibold text-lg">
          Explore directions to nearby locations from {decodedLocationId}
          using the map and video tour.
        </p>
        <div className="flex items-center justify-center gap-4 my-6">
          <Link
            className="bg-accent text-white px-5 py-2 rounded-3xl  flex items-center gap-2"
            href="/map"
          >
            Map
            <div>
              <FaLocationDot />
            </div>
          </Link>
          <Link
            className="bg-accent text-white px-5 py-2 rounded-3xl flex items-center gap-2 align-center"
            href="/videotour"
          >
            Video Tour
            <div>
              <FaCirclePlay />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CurrentLocation;
