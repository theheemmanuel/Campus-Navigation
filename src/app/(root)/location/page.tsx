"use client";

import { NextPage } from "next";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import chapel from "../../../../public/sapetro.jpg";

const LocationPage: NextPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="bg-light">
      <div className="maxWidth px-6 py-12">
        <div className="flex justify-center text-center flex-col gap-6">
          <div className="bg-[#0000791a] text-accent flex items-center  w-fit mx-auto px-4 py-2 rounded-full gap-2 font-semibold">
            <FaLocationDot color="#000079" />
            You are here
          </div>
          <h1 className="font-bold md:text-5xl text-4xl text-accent">{id}</h1>
          <p className="text-secondary font-semibold text-lg">
            Your gateway to knowledge, resources, and academic excellence at
            Redeemer&apos;s University
          </p>
        </div>
        <div className="md:flex gap-8 my-12">
          <div className="md:w-1/2">
            <Image
              src={chapel}
              alt="chapel"
              placeholder="blur"
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2 rounded-2xl bg-white p-4">
            <h1 className="text-accent font-bold text-2xl">
              About this location
            </h1>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              nemo deserunt accusantium natus officia pariatur expedita quaerat
              debitis in? Aut aspernatur labore nobis quia, nesciunt ipsum
              laboriosam! Quis dicta magnam illum, dignissimos accusantium qui
              omnis similique tempore! Quis, praesentium rerum, laudantium
              perferendis eum quasi maxime esse voluptatum repudiandae sed
              aliquid nostrum eveniet voluptatem quae nesciunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
