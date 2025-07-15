import Link from "next/link";
import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="maxWidth p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        <div>
          <h1 className="font-bold mb-4 text-xl">Navigation</h1>
          <ul className="flex flex-col gap-3 text-secondary text-md">
            <Link href="/videotour">Video Tour</Link>
            <Link href="/map">Map</Link>
            <Link href="/scan">Scan QR Code</Link>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4 text-xl">Important Links</h1>
          <ul className="flex flex-col gap-3 text-secondary text-md">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4 text-xl">Emergency</h1>
          <ul className="flex flex-col gap-3 text-secondary text-md">
            <a href="tel:+2347063195967">Contact School Authority</a>
            <a href="tel:+2349050960883">Contact School Ambulance</a>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4 text-xl">Information</h1>
          <ul className="flex flex-col gap-3 text-secondary text-md">
            <div className="flex items-center gap-2">
              <div>
                <IoCall />
              </div>
              <p>0700 700 8000, 0807 300 4715</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="pt-1">
                <FaLocationDot />
              </div>
              <p>
                Redeemer&apos;s University P.M.B 230 Ede Off Gbongan – Osogbo
                Rd. (Akoda-Ede Junction) Osun State
              </p>
            </div>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center text-secondary text-lg py-8">
        &copy; 2025 Redeemers University Smart Campus Navigation System. All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
