"use client";

import React from "react";
import { useLocationContext } from "@/components/ContextApi";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const PopularPlaces: React.FC = () => {
  const { locations, loading } = useLocationContext();

  const displayLocations = locations.map((loc) => ({
    id: loc.id,
    name: loc.title,
    description: loc.description,
    image: loc.image,
    category: loc.label,
  }));

  if (loading) {
    return (
      <div className="bg-[#faf8fd]">
        <div className="maxWidth px-8 py-10">
          <h1 className="text-primary font-bold md:text-5xl text-4xl">
            Popular Places 🗺️
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {/* Loading skeleton */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md animate-pulse"
              >
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#faf8fd]">
      <div className="maxWidth px-8 py-10">
        <h1 className="text-primary font-bold md:text-5xl text-4xl">
          Popular Places 🗺️
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          {displayLocations.map((location) => (
            <Link
              key={location.id}
              href={`/location/${encodeURIComponent(location.name)}`}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
            >
              <Image
                src={location.image}
                alt={location.name}
                className="w-full h-48 object-cover"
                width={1000}
                height={1000}
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
      </div>
    </div>
  );
};

export default PopularPlaces;
