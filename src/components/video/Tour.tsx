/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FaWalking } from "react-icons/fa";
import React, { useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { useLocationContext } from "../ContextApi";

const Tour: React.FC = () => {
  const { videos, videoloading } = useLocationContext();
  const [searchInput, setSearchInput] = useState("");
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  // Add safety check for videos
  const safeVideos = videos || [];

  // Filter tours based on search input
  const filteredTours = useMemo(() => {
    if (!searchInput.trim()) {
      return safeVideos;
    }
    return safeVideos.filter((tour) =>
      tour.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput, safeVideos]);

  // Clear search input
  const clearSearch = () => {
    setSearchInput("");
  };

  // Handle video play
  const handlePlayVideo = (tourId: number) => {
    setSelectedTour(tourId);
  };

  // Handle close video
  const handleCloseVideo = () => {
    setSelectedTour(null);
  };

  if (videoloading) {
    return (
      <div className="bg-[#faf8fd]">
        <div className="maxWidth px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {/* Loading skeleton */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md animate-pulse"
              >
                <div className="w-full h-52 bg-gray-200"></div>
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
    <div className="maxWidth p-6">
      <div className="flex justify-center items-center gap-2 border-2 mb-4 rounded-3xl py-1 px-4 md:w-1/3 mx-auto">
        <CiSearch size={30} />
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Search Location"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {searchInput && (
          <button
            onClick={clearSearch}
            className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <IoClose size={20} className="text-gray-500" />
          </button>
        )}
      </div>

      {/* Video Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-accent">
                {safeVideos.find((tour) => tour.id === selectedTour)?.title}
              </h3>
              <button
                onClick={handleCloseVideo}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <video
                controls
                autoPlay
                className="w-full h-full rounded-lg"
                src={safeVideos.find((tour) => tour.id === selectedTour)?.video}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                {
                  safeVideos.find((tour) => tour.id === selectedTour)
                    ?.description
                }
              </p>
              <div className="flex items-center gap-2 text-secondary mt-2">
                <FaWalking />{" "}
                {safeVideos.find((tour) => tour.id === selectedTour)?.duration}
              </div>
            </div>
          </div>
        </div>
      )}

      {searchInput && (
        <div className="text-center my-4 text-secondary">
          {filteredTours.length > 0 &&
            `Found ${filteredTours.length} tour${
              filteredTours.length !== 1 ? "s" : ""
            } matching "${searchInput}"`}
        </div>
      )}

      {/* Tour Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.map((each) => (
          <div
            key={each.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <Image
                src={each.img}
                alt={each.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
                width={"500"}
                height={"500"}
              />
            </div>
            <h1 className="text-accent font-bold">{each.title}</h1>
            <p className="py-4 text-secondary">{each.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-secondary">
                <FaWalking /> {each.duration}
              </div>
              <button
                onClick={() => handlePlayVideo(each.id)}
                className="flex items-center gap-2 bg-accent cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
              >
                <FaPlay className="text-sm" />
                Watch Tour
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show empty states only when no tours to display */}
      {filteredTours.length === 0 && !videoloading && (
        <div className="text-center py-12">
          {searchInput ? (
            // Search returned no results
            <>
              <div className="text-gray-400 mb-4">
                <CiSearch size={64} className="mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No tours found
              </h3>
              <p className="text-gray-500 mb-4">
                We couldn&apos;t find any tours matching &quot;{searchInput}
                &quot;.
              </p>
              <button
                onClick={clearSearch}
                className="mt-4 text-accent hover:underline"
              >
                Clear search and show all tours
              </button>
            </>
          ) : (
            // No videos available at all
            <>
              <div className="text-gray-400 mb-4">
                <FaPlay size={64} className="mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No video tours available
              </h3>
              <p className="text-gray-500">
                Video tours are currently not available. Please check back later
                or contact support.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Tour;
