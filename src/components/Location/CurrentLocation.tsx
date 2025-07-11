"use client";

import React from "react";
import Image from "next/image";
import { FaCirclePlay, FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { useLocationContext } from "../ContextApi";

interface CurrentLocationProps {
  locationId: string;
}

const CurrentLocation: React.FC<CurrentLocationProps> = ({ locationId }) => {
  const decodedLocationId = decodeURIComponent(locationId);
  const { locations, loading } = useLocationContext();

  // Filter to find the current location
  const currentLocation = locations.find(
    (location) =>
      location.title.toLowerCase() === decodedLocationId.toLowerCase() ||
      location.title === decodedLocationId
  );

  // Loading state
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="flex justify-center text-center flex-col gap-6">
          <div className="bg-gray-200 h-12 w-32 mx-auto rounded-full"></div>
          <div className="bg-gray-200 h-16 w-3/4 mx-auto rounded"></div>
          <div className="bg-gray-200 h-6 w-full rounded"></div>
        </div>
        <div className="md:flex gap-8 my-12">
          <div className="md:w-1/2">
            <div className="bg-gray-200 h-64 rounded-2xl"></div>
          </div>
          <div className="md:w-1/2 bg-gray-200 h-64 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  // If location not found, show error state
  if (!currentLocation) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 text-red-600 flex items-center w-fit mx-auto px-4 py-2 rounded-full gap-2 font-semibold mb-6">
          <FaLocationDot color="#dc2626" />
          Location not found
        </div>
        <h1 className="font-bold md:text-4xl text-3xl text-gray-600 mb-4">
          {decodedLocationId}
        </h1>
        <p className="text-gray-500 font-semibold text-lg mb-8">
          We couldn&apos;t find information about this location. Please check
          the location name or try scanning a QR code.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            className="bg-accent text-white px-5 py-2 rounded-3xl flex items-center gap-2"
            href="/scan"
          >
            Scan QR Code
            <FaLocationDot />
          </Link>
          <Link
            className="bg-gray-600 text-white px-5 py-2 rounded-3xl flex items-center gap-2"
            href="/"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center text-center flex-col gap-4">
        <div className="bg-[#0000791a] text-accent flex items-center w-fit mx-auto px-4 py-2 rounded-full gap-2 font-semibold">
          <FaLocationDot color="#000079" />
          You are here
        </div>
        <h1 className="font-bold md:text-4xl text-3xl text-accent">
          {currentLocation.title}
        </h1>
        <p className="text-secondary font-semibold text-lg">
          {currentLocation.description ||
            "Your gateway to knowledge, resources, and academic excellence at Redeemer's University"}
        </p>
      </div>

      <div className="md:flex-row flex-col flex gap-8 my-12">
        <div className="md:w-1/2 md:sticky top-22 h-fit">
          <Image
            src={currentLocation.image}
            alt={currentLocation.title}
            className="rounded-2xl w-full h-auto object-cover bg-black"
            width={600}
            height={400}
          />
        </div>

        <div className="md:w-1/2 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-accent font-bold text-2xl mb-3">
              About this location
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {currentLocation.info}
            </p>
          </div>
          {currentLocation.label && (
            <div className="mb-6">
              <h3 className="text-accent font-bold text-xl mb-2">Category</h3>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {currentLocation.label}
              </span>
            </div>
          )}
          <div>
            <h3 className="text-accent font-bold text-xl mb-2">
              Contact Information
            </h3>
            <div className="space-y-2 text-gray-700">
              {/* <p>Email: {currentLocation.email}</p> */}
              <p>Phone: 0700 700 8000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-accent font-bold text-4xl">Find Your Way</h2>
        <div className="h-1 w-16 mx-auto my-2 bg-accent"></div>
        <p className="text-secondary font-semibold text-lg">
          Explore directions to nearby locations from {currentLocation.title}{" "}
          using the map or video tour.
        </p>
        <div className="flex items-center justify-center gap-4 my-6">
          <Link
            className="bg-accent text-white px-5 py-2 rounded-3xl flex items-center gap-2 hover:bg-accent/90 transition-colors"
            href="/map"
          >
            Map
            <FaLocationDot />
          </Link>
          <Link
            className="bg-accent text-white px-5 py-2 rounded-3xl flex items-center gap-2 hover:bg-accent/90 transition-colors"
            href="/videotour"
          >
            Video Tour
            <FaCirclePlay />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CurrentLocation;
