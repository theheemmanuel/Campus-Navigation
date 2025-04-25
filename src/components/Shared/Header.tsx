import Image from "next/image";
import React from "react";
import logo from "../../../public/run_logo.png";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)] z-100 bg-white">
      <div className="maxWidth py-6 px-8 flex items-center justify-between">
        <Image src={logo} placeholder="blur" alt="logo" className="h-10 w-40" />
        <div className="lg:flex hidden gap-6 items-center font-semibold text-lg">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Scan Location</Link>
          <Link href="/">Check Map</Link>
        </div>
        <div className="max-lg:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-3xl font-bold text-g"
          >
            Video Tour <FaCirclePlay />
          </Link>
        </div>
        <div className="lg:hidden">
          <IoMenu size={30} color="#000079" />
        </div>
      </div>
    </div>
  );
};

export default Header;
