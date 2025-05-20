"use client";

import { NextPage } from "next";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import chapel from "../../../../public/sapetro.jpg";

const LocationPage: NextPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="bg-light">
      <div className="maxWidth px-6 py-12">
        <div className="flex justify-center text-center flex-col gap-6">
          <div className="bg-[#0000791a] text-accent flex items-center  w-fit mx-auto px-4 py-2 rounded-full gap-2 font-semibold">
            <FaLocationDot color="#000079" />
            You are here
          </div>
          <h1 className="font-bold md:text-5xl text-4xl text-accent">{id}</h1>
          <p className="text-secondary font-semibold text-lg">
            Your gateway to knowledge, resources, and academic excellence at
            Redeemer&apos;s University
          </p>
        </div>
        <div className="md:flex gap-8 my-12">
          <div className="md:w-1/2 md:sticky top-22 h-fit">
            <Image
              src={chapel}
              alt="chapel"
              placeholder="blur"
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2 rounded-2xl bg-white p-4">
            <div>
              <h1 className="text-accent font-bold text-2xl">
                About this location
              </h1>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                nemo deserunt accusantium natus officia pariatur expedita
                quaerat debitis in? Aut aspernatur labore nobis quia, nesciunt
                ipsum laboriosam! Quis dicta magnam illum, dignissimos
                accusantium qui omnis similique tempore! Quis, praesentium
                rerum, laudantium perferendis eum quasi maxime esse voluptatum
                repudiandae sed aliquid nostrum eveniet voluptatem quae
                nesciunt!
              </p>
            </div>
            <div>
              <h1 className="text-accent font-bold text-2xl mt-2">
                Opening Hours
              </h1>
              <div>
                <div className="flex justify-between my-2">
                  <p>Monday - Friday</p>
                  <p>8:00AM - 10:00PM</p>
                </div>
                <hr />
                <div className="flex justify-between my-2">
                  <p>Saturday</p>
                  <p>9:00AM - 6:00PM</p>
                </div>
                <hr />
                <div className="flex justify-between my-2">
                  <p>Sunday</p>
                  <p>2:00PM - 8:00PM</p>
                </div>
                <hr />
              </div>
            </div>
            <div>
              <h1 className="text-accent font-bold text-2xl mt-2">
                Contact Information
              </h1>
              <p className="">Email: library@run.edu.ng</p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="text-center">
            <h1 className="text-accent font-bold text-4xl">Find Your Way</h1>
            <div className="h-1 w-16 mx-auto my-2 bg-accent justify-center"></div>
            <p className="text-secondary font-semibold text-lg">
              Explore directions to nearby locations from the University Library
            </p>
          </div>
          <div className="bg-white p-4 my-6 rounded-2xl">
            <div className="h-[50vh] m-4 rounded-2xl bg-[#e0e5ec]"></div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#0000791a] px-4 py-2 text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Exit The Library</h3>
                <p className="text-secondary">
                  Leave through the main entrance doors and turn right onto the
                  central walkway.
                </p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#0000791a] px-4 py-2 text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Follow the Walkway</h3>
                <p className="text-secondary">
                  Continue straight along the covered walkway for approximately
                  200 meters past the fountain.
                </p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#0000791a] px-4 py-2 text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Turn at the Junction</h3>
                <p className="text-secondary">
                  At the pathway intersection, turn left toward the tall white
                  building with the blue-tinted windows.
                </p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#0000791a] px-4 py-2 text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">
                  Enter the Faculty Building
                </h3>
                <p className="text-secondary">
                  The Faculty of Science & Technology Building will be directly
                  ahead. Enter through the main doors.
                </p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#0000791a] px-4 py-2 text-xl font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Navigate Inside</h3>
                <p className="text-secondary">
                  Once inside, faculty offices are located on floors 2-4, with
                  lecture halls on the ground floor.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="text-center">
              <h1 className="text-accent font-bold text-4xl">
                Available Services
              </h1>
              <div className="h-1 w-16 mx-auto my-2 bg-accent justify-center"></div>
              <p className="text-secondary font-semibold text-lg">
                Explore the various services offered at the University Library
              </p>
            </div>
            <div className="grid pt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-2xl p-6 text-center">
                <h3 className="text-primary font-bold text-xl">Computer Lab</h3>
                <p className="text-secondary">
                  Access high-speed computers with internet connectivity and
                  specialized academic software for research and assignments.
                </p>
                <div className="flex items-center gap-2 justify-center mt-4">
                  <p>Learn more</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-2xl p-6 text-center">
                <h3 className="text-primary font-bold text-xl">
                  Printing & Photocopying
                </h3>
                <p className="text-secondary">
                  Print, scan, and photocopy services available at affordable
                  rates for students and staff members.
                </p>
                <div className="flex items-center gap-2 justify-center mt-4">
                  <p>Learn more</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-2xl p-6 text-center">
                <h3 className="text-primary font-bold text-xl">Study Rooms</h3>
                <p className="text-secondary">
                  Book private and group study rooms equipped with whiteboards
                  and presentation displays.
                </p>
                <div className="flex items-center gap-2 justify-center mt-4">
                  <p>Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
