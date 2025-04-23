import Image from "next/image";
import React from "react";
import logo from "../../../public/run_logo.png";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <div className="maxWidth p-4 flex items-center justify-between">
        <Image src={logo} placeholder="blur" alt="logo" className="h-10 w-40" />
        <div className="flex gap-6 items-center font-semibold text-lg text-[#2d3142]">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Scan Location</Link>
          <Link href="/">Check Map</Link>
        </div>
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#000079] text-white px-5 py-3 rounded-3xl font-bold text-g"
          >
            Video Tour <FaCirclePlay />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
