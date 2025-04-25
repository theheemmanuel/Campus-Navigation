import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Scan: React.FC = () => {
  return (
    <div className="bg-dark my-8">
      <div className="px-8 py-20 md:maxWidth md:w-3/5 text-white mx-auto text-center">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold lg:leading-15">
          Scan QR codes you find around the school to instantly discover your
          exact location
        </h2>
        <Link
          href="/"
          className="flex items-center gap-2 mt-12 bg-white rounded-4xl w-fit px-12 py-4 mx-auto font-semibold text-lg text-primary"
        >
          <button>Scan QR Code</button>
          <BiRightArrowAlt />
        </Link>
      </div>
    </div>
  );
};

export default Scan;
