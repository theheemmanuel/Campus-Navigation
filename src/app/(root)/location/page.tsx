import { Metadata, NextPage } from "next";
import React from "react";
import CurrentLocation from "@/components/Location/CurrentLocation";

export const metadata: Metadata = {
  title: "Location | Redeemer's University",
  description:
    "An interactive campus navigation app for Redeemer's University, helping visitors and students easily find their way around campus with maps, location scanning, and virtual video tours",
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
