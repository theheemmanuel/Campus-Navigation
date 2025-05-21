import ScanComp from "@/components/Scan/ScanComp";
import { Metadata, NextPage } from "next";
import React from "react";
import { FaLocationDot, FaClock, FaCircleInfo } from "react-icons/fa6";
import { MdDirections } from "react-icons/md";

export const metadata: Metadata = {
  title: "Scan | Redeemer's University",
  description:
    "Explore our hotel through stunning images. View our elegant rooms, facilities, dining areas, and beautiful surroundings to get a glimpse of the experience awaiting you.",
};

const ScanPage: NextPage = () => {
  return (
    <div className="bg-light">
      <div className="maxWidth p-6">
        <ScanComp />
        <div className="md:w-3/4 mx-auto py-8 my-8 bg-white p-[30px] rounded-[20px] shadow-[0_15px_30px_rgba(0,0,121,0.1)]">
          <h3 className="text-accent text-2xl pb-5 font-bold text-center">
            How It Works
          </h3>
          <ul className="text-primary flex flex-col gap-3 text-lg font-">
            <li>
              1. Find a QR code on a building, classroom, or location sign
              around campus.
            </li>
            <li>
              2. Click &quot;Start Scanning&quot; and allow camera access when
              prompted.
            </li>
            <li>
              3. Point your camera at the QR code until it&apos;s detected.
            </li>
            <li>
              4. Once scanned, you&apos;ll be directed to information about your
              current location.
            </li>
            <p>
              The QR codes around campus are designed to help you navigate
              efficiently. When scanned, they instantly show your exact location
              and provide options for directions to other campus facilities.
            </p>
          </ul>
          <h3 className="text-accent text-2xl py-5 font-bold text-center">
            Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div>
                <FaLocationDot color="#000079" />
              </div>
              <p>Instant Location Information</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <MdDirections color="#000079" />
              </div>
              <p>Turn-by-Turn Directions</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaClock color="#000079" />
              </div>
              <p>Never Be Late Again</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaCircleInfo color="#000079" />
              </div>
              <p>Building Details & Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScanPage;
