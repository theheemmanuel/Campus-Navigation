"use client";
import { FaWalking } from "react-icons/fa";
import React, { useState } from "react";
import img from "../../../public/sapetro.jpg";
import Image from "next/image";

const Tour: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("");
  const tabs = [
    { id: 1, label: "All Tours", value: "" },
    { id: 2, label: "From Second Gate", value: "second-gate" },
    { id: 3, label: "From Hostel", value: "hostel" },
    { id: 4, label: "Popular routes", value: "popular" },
  ];

  const tours = [
    {
      id: 1,
      title: "Library -> Faculty of Engineering",
      details:
        "A guided walk from the University Library to the Faculty of Engineering building (SAPETRO).",
      mins: "8 min walk",
    },
    {
      id: 2,
      title: "Medical Sciences -> Library",
      details:
        "Navigate from the Faculty of Medical Sciences to the University Library with this guided tour.",
      mins: "12 min walk",
    },
    {
      id: 3,
      title: "Library -> Chapel/Auditorium",
      details:
        "Quick tour from the Library to RUN Chapel/Auditorium for events and worship services.",
      mins: "6 min walk",
    },
    {
      id: 4,
      title: "Zenith ICT Center -> Library",
      details:
        "Find your way from the Zenith ICT Center to the Library with this helpful video guide.",
      mins: "10 min walk",
    },
    {
      id: 5,
      title: "Library -> Cafeteria",
      details:
        "Hungry after studying? Follow this quick route from the Library to the main Cafeteria.",
      mins: "5 min walk",
    },
    {
      id: 6,
      title: "Student Hostel -> Library",
      details:
        "Navigate from the Student Hostel area to the Library with this comprehensive video guide.",
      mins: "15 min walk",
    },
  ];

  return (
    <div className="maxWidth p-6">
      <div className="flex md:justify-center gap-4 items-center overflow-auto scrollbar-hide">
        {tabs.map((each) => (
          <div key={each.id} onClick={() => setCurrentTab(each.value)}>
            <button
              className={`rounded-xl px-4 py-2 text-nowrap ${
                currentTab === each.value
                  ? "bg-accent text-white"
                  : "text-accent"
              } border-2 font-semibold `}
            >
              {each.label}
            </button>
          </div>
        ))}
      </div>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tours.map((each) => (
          <div
            key={each.id}
            className="bg-white rounded-xl shadow-md cursor-pointer p-4"
          >
            <Image src={img} alt={each.title} className="rounded-xl mb-4" />
            <h1 className="text-accent font-bold">{each.title}</h1>
            <p className="py-4 text-secondary">{each.details}</p>
            <div className="flex items-center gap-2 text-secondary">
              <FaWalking /> {each.mins}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="border-accent border-2 rounded-xl px-5 py-2 cursor-pointer text-accent font-semibold">
          Load More Tours
        </button>
      </div>
    </div>
  );
};
export default Tour;
