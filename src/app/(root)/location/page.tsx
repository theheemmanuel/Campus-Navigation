import { Metadata, NextPage } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

import chapel from "../../../../public/chapel.jpg";
import sapetro from "../../../../public/sapetro.jpg";
import bms from "../../../../public/bms.jpg";
import zenith from "../../../../public/zenith.jpg";
import lr from "../../../../public/lr.png";
import { FaSearch } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Campus Locations | Redeemer's University",
  description:
    "Browse all campus locations at Redeemer's University. Find detailed information about buildings, facilities, and get directions.",
};

const LocationsPage: NextPage = () => {
  const locations = [
    {
      id: "RUN Auditorium",
      name: "RUN Auditorium",
      description: "Main auditorium for events and worship services",
      image: chapel,
      category: "Facilities",
    },
    {
      id: "Faculty of Engineering",
      name: "Faculty of Engineering",
      description: "SAPETRO building housing engineering departments",
      image: sapetro,
      category: "Academic",
    },
    {
      id: "Faculty of Medical Sciences",
      name: "Faculty of Medical Sciences",
      description: "Medical sciences faculty building",
      image: bms,
      category: "Academic",
    },
    {
      id: "Zenith ICT Center",
      name: "Zenith ICT Center",
      description: "Computer and ICT facilities",
      image: zenith,
      category: "Technology",
    },
    {
      id: "NLT",
      name: "NLT",
      description: "Natural Science Lecture Theatre",
      image: lr,
      category: "Academic",
    },
    {
      id: "Lecture Rooms",
      name: "Lecture Rooms",
      description: "Lecture rooms for various departments",
      image: lr,
      category: "Academic",
    },
  ];

  return (
    <div className="bg-light">
      <div className="maxWidth px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-bold md:text-5xl text-4xl text-accent mb-4">
            Campus Locations
          </h1>
          <p className="text-secondary font-semibold text-lg mb-6">
            Explore all locations across Redeemer&apos;s University campus
          </p>
          <div className="h-1 w-16 mx-auto bg-accent"></div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/scan"
            className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-3xl font-semibold hover:bg-transparent transition-colors hover:border-accent hover:text-accent border-2"
          >
            <FaSearch />
            Scan QR Code
          </Link>
          <Link
            href="/map"
            className="flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-3xl font-semibold hover:bg-accent hover:text-white transition-colors"
          >
            <FaLocationDot />
            View Map
          </Link>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/location/${encodeURIComponent(location.id)}`}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
            >
              <Image
                src={location.image}
                alt={location.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-semibold">
                    {location.category}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-accent mb-2">
                  {location.name}
                </h3>
                <p className="text-secondary">{location.description}</p>
                <div className="flex items-center gap-2 mt-4 text-accent font-semibold">
                  <FaLocationDot size={16} />
                  <span>View Details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-accent mb-4">
            Need Help Finding a Location?
          </h2>
          <p className="text-secondary mb-6">
            Can&apos;t find what you&apos;re looking for? Try scanning a QR code
            or check our interactive map.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/scan"
              className="bg-accent text-white px-6 py-3 rounded-3xl font-semibold hover:bg-accent/90 transition-colors"
            >
              Scan QR Code
            </Link>
            <Link
              href="/videotour"
              className="border-2 border-accent text-accent px-6 py-3 rounded-3xl font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Watch Video Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
