import Image from "next/image";
import React from "react";
import chapel from "../../../public/chapel.jpg";
import bms from "../../../public/bms.jpg";
import sapetro from "../../../public/sapetro.jpg";
import zenith from "../../../public/zenith.jpg";
import lr from "../../../public/lr.png";
// import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const PopularPlaces: React.FC = () => {
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
    <div className="bg-[#faf8fd]">
      <div className="maxWidth px-8 py-10">
        <h1 className="text-primary font-bold md:text-5xl text-4xl">
          Popular Places 🗺️
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
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
      </div>
    </div>
  );
};

export default PopularPlaces;
