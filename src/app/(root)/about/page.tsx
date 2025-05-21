import { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Redeemer's University",
  description:
    "Explore our hotel through stunning images. View our elegant rooms, facilities, dining areas, and beautiful surroundings to get a glimpse of the experience awaiting you.",
};

const page: NextPage = () => {
  return (
    <div className="bg-light">
      <div className="maxWidth p-6">
        <div className="md:w-3/4 mx-auto my-8">
          <h1 className="md:text-6xl text-4xl text-center font-bold">
            How We <span className="text-accent">Guide You</span>
          </h1>
          <div className="my-6">
            <div>
              <h2 className="text-[#1e3a8a] md:text-3xl text-2xl font-bold">
                Our Story
              </h2>
              <div className="mt-1 h-1 w-12 bg-blue-500"></div>
            </div>
            <p className="my-4 text-primary text-lg">
              This platform was developed as a final-year project by four
              dedicated students—Edward Favour, Oladiran Emmanuel, Omolaja
              Emmanuel, and Oni Emmanuel. Their project, titled
              &quot;Development of a Smart Campus Navigation System with
              Real-Time Guidance and Accessibility Features,&quot; set out to
              address a common challenge on campus: helping newcomers find their
              way with ease.
            </p>
            <p className="text-primary text-lg pb-6">
              Designed with both innovation and inclusivity in mind, the system
              offers real-time guidance and accessibility support—making life
              simpler for new students, visiting guests, and lecturers
              navigating the campus for the first time.
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-[#1e3a8a] md:text-3xl text-2xl font-bold">
              What We Offer
            </h2>
            <div className="mt-1 h-1 w-12 bg-blue-500"></div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-6 md:gap-y-6">
              <div className="my-5">
                <h3 className="text-xl text-[#1e3a8a] font-bold mb-2">
                  Real-Time Campus Navigation
                </h3>
                <p className="text-primary text-lg">
                  No more wandering or second-guessing directions. Our system
                  provides turn-by-turn guidance across campus, helping users
                  get to their destinations quickly and confidently.
                </p>
              </div>
              <div className="my-5">
                <h3 className="text-xl text-[#1e3a8a] font-bold mb-2">
                  Smart Location Detection
                </h3>
                <p className="text-primary text-lg">
                  The system pinpoints your exact location on campus and adjusts
                  guidance accordingly, making navigation intuitive and
                  responsive to your movements.
                </p>
              </div>
              <div className="my-5">
                <h3 className="text-xl text-[#1e3a8a] font-bold mb-2">
                  Building Information Access
                </h3>
                <p className="text-primary text-lg">
                  Need to find a specific department or office? The system
                  provides detailed information about campus buildings,
                  including names, purposes, and key points of contact.
                </p>
              </div>
              <div className="my-5">
                <h3 className="text-xl text-[#1e3a8a] font-bold mb-2">
                  Visitor-Friendly Mode
                </h3>
                <p className="text-primary text-lg">
                  Specially designed for first-time visitors, this mode offers
                  simplified directions and tailored suggestions to make campus
                  tours stress-free and smooth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
