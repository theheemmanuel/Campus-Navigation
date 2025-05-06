import Tour from "@/components/video/Tour";
import { NextPage } from "next";
import React from "react";

const page: NextPage = () => {
  return (
    <div className="bg-light">
      <div className="maxWidth p-6">
        <div className="">
          <h1 className="text-3xl md:text-4xl text-accent text-center pt-6 font-bold">
            RUN Campus Video Tours
          </h1>
          <div className="">
            <p className="md:w-2/4 text-center mx-auto py-4">
              Explore popular routes across Redeemers University campus
            </p>
            <div className="h-1 w-16 mx-auto bg-accent justify-center"></div>
          </div>
        </div>
      </div>
      <Tour />
    </div>
  );
};

export default page;
