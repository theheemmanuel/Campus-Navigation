import { NextPage } from "next";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const page: NextPage = () => {
  return (
    <div className="bg-light">
      <div className="maxWidth p-6">
        <div className="py6">
          <h1 className="text-3xl md:text-4xl text-accent text-center pt-6 font-bold">
            RUN Campus Interactive Map
          </h1>
          <p className="md:w-2/4 text-center mx-auto py-6">
            Explore Redeemers University campus, find your way to buildings, and
            discover key locations with our interactive map. Never get lost on
            campus again!
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-accent rounded-xl px-6 text-white mt-4 py-2 inline">
            <FaLocationDot className="inline mr-2" />
            Click Here For My Location
          </button>
        </div>
        <div
          className="my-8 bg-white p-6 rounded-xl flex justify-center items-center"
          style={{ height: "50vh" }}
        ></div>
      </div>
    </div>
  );
};

export default page;
