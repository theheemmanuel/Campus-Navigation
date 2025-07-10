/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FaWalking } from "react-icons/fa";
import React, { useState, useMemo } from "react";
import sapetro from "../../../public/sapetro.jpg";
import bms from "../../../public/bms.jpg";
import chapel from "../../../public/chapel.jpg";
import zenith from "../../../public/zenith.jpg";
import manna from "../../../public/manna.png";
import library from "../../../public/library.png";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const Tour: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const tours = [
    {
      id: 1,
      title: "Library -> Faculty of Engineering",
      details:
        "A guided walk from the University Library to the Faculty of Engineering building (SAPETRO).",
      mins: "8 min walk",
      img: sapetro,
    },
    {
      id: 2,
      title: "Medical Sciences -> Library",
      details:
        "Navigate from the Faculty of Medical Sciences to the University Library with this guided tour.",
      mins: "12 min walk",
      img: bms,
    },
    {
      id: 3,
      title: "Library -> Auditorium",
      details:
        "Quick tour from the Library to RUN Chapel/Auditorium for events and worship services.",
      mins: "6 min walk",
      img: chapel,
    },
    {
      id: 4,
      title: "Zenith ICT Center -> Library",
      details:
        "Find your way from the Zenith ICT Center to the Library with this helpful video guide.",
      mins: "10 min walk",
      img: zenith,
    },
    {
      id: 5,
      title: "Prophet Moses Hall -> Library",
      details:
        "Navigate from the Student Hostel area to the Library with this comprehensive video guide.",
      mins: "15 min walk",
      img: library,
    },
    {
      id: 6,
      title: "Library -> Cafeteria",
      details:
        "Hungry after studying? Follow this quick route from the Library to the main Cafeteria.",
      mins: "5 min walk",
      img: manna,
    },
  ];

  // Filter tours based on search input
  const filteredTours = useMemo(() => {
    if (!searchInput.trim()) {
      return tours;
    }
    return tours.filter((tour) =>
      tour.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput]);

  // Clear search input
  const clearSearch = () => {
    setSearchInput("");
  };

  return (
    <div className="maxWidth p-6">
      <div className="flex justify-center items-center gap-2 border-2 rounded-3xl py-1 px-4 md:w-1/3 mx-auto">
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

      {/* Show search results count */}
      {searchInput && (
        <div className="text-center mt-4 text-secondary">
          {filteredTours.length > 0 &&
            `Found ${filteredTours.length} tour${
              filteredTours.length !== 1 ? "s" : ""
            } matching "${searchInput}"`}
        </div>
      )}

      <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTours.length > 0 ? (
          filteredTours.map((each) => (
            <div
              key={each.id}
              className="bg-white rounded-xl shadow-md cursor-pointer p-4"
            >
              <Image
                src={each.img}
                alt={each.title}
                className="rounded-xl mb-4"
              />
              <h1 className="text-accent font-bold">{each.title}</h1>
              <p className="py-4 text-secondary">{each.details}</p>
              <div className="flex items-center gap-2 text-secondary">
                <FaWalking /> {each.mins}
              </div>
            </div>
          ))
        ) : searchInput ? (
          <div className="col-span-full text-center py-12">
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
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tour;
