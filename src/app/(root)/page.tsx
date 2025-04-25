import FindLocation from "@/components/Home/FindLocation";
import Hero from "@/components/Home/Hero";
import PopularPlaces from "@/components/Home/PopularPlaces";
import Scan from "@/components/Home/Scan";
import Footer from "@/components/Shared/Footer";
import { NextPage } from "next";
import React from "react";

const page: NextPage = () => {
  return (
    <div>
      <Hero />
      <PopularPlaces />
      <Scan />
      <FindLocation />
      <Footer />
    </div>
  );
};

export default page;
