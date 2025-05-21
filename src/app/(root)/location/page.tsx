import { Metadata, NextPage } from "next";
import React from "react";
import CurrentLocation from "@/components/Location/CurrentLocation";

export const metadata: Metadata = {
  title: "Location | Redeemer's University",
  description:
    "Explore our hotel through stunning images. View our elegant rooms, facilities, dining areas, and beautiful surroundings to get a glimpse of the experience awaiting you.",
};

const LocationPage: NextPage = () => {
  return (
    <div className="bg-light">
      <div className="maxWidth px-6 py-12">
        <CurrentLocation />
      </div>
    </div>
  );
};

export default LocationPage;
