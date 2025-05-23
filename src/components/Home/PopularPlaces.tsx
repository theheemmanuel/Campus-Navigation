import Image from "next/image";
import React from "react";
import gate from "../../../public/gate.jpg";
import chapel from "../../../public/chapel.jpg";
import bms from "../../../public/bms.jpg";
import sapetro from "../../../public/sapetro.jpg";
import zenith from "../../../public/zenith.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const PopularPlaces: React.FC = () => {
  const places = [
    {
      id: "1",
      name: "Main Gate",
      image: gate,
      url: "location?id=Main Gate",
      tag: ["Security"],
    },
    {
      id: "2",
      name: "RUN Auditorium",
      image: chapel,
      url: "location?id=RUN Auditorium",
      tag: ["Auditorium"],
    },
    {
      id: "3",
      name: "Faculty of Medical Sciences",
      image: bms,
      url: "location?id=Faculty of Medical Sciences",
      tag: ["Faculty"],
    },
    {
      id: "4",
      name: "Faculty of Engineering",
      image: sapetro,
      url: "location?id=Faculty of Engineering",
      tag: ["Faculty"],
    },
    {
      id: "5",
      name: "Zenith ICT Center",
      image: zenith,
      url: "location?id=Zenith ICT Center",
      tag: ["Troubleshooting", "technical Problem"],
    },
  ];
  return (
    <div className="bg-[#faf8fd]">
      <div className="maxWidth px-8 py-10">
        <h1 className="text-primary font-bold md:text-5xl text-4xl">
          Popular Places 🗺️
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {places.map((each) => (
            <div
              key={each.id}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <Image
                src={each.image}
                alt={each.name}
                placeholder="blur"
                className="h-[200px] object-cover"
              />
              <div className="p-4">
                <h1 className="font-bold text-xl">{each.name}</h1>
                <div className="my-4 flex gap-2 flex-wrap">
                  {each.tag.map((each) => (
                    <p
                      key={each}
                      className="rounded-2xl bg-[#f0f2f5] w-fit px-4 py-2"
                    >
                      {each}
                    </p>
                  ))}
                </div>
                <Link href={each.url} className="flex items-center gap-1">
                  <p className=" text-[#000079] text-lg">View Location</p>{" "}
                  <BiRightArrowAlt />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPlaces;
