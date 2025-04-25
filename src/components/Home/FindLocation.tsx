import React from "react";
import classroom from "../../../public/class.png";
import cafeteria from "../../../public/cafteria.png";
import hostels from "../../../public/hostel.png";
import Image from "next/image";

const FindLocation: React.FC = () => {
  const images = [cafeteria, classroom, hostels];
  return (
    <div className="maxWidth p-8">
      <div className="flex items-center pb-6 gap-4">
        <h1 className="text-4xl font-bold">Find Location</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {images.map((each, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] "
          >
            <Image src={each} alt="venues" placeholder="blur" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindLocation;
