import Tour from "@/components/video/Tour";
import { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Video Tour | Redeemer's University",
  description:
    "Explore video tours of Redeemer's University campus. Discover the beauty and facilities of our campus through virtual tours.",
  openGraph: {
    title: "Video Tour | Redeemer's University",
    description:
      "Explore video tours of Redeemer's University campus. Discover the beauty and facilities of our campus through virtual tours.",
    images: [
      new URL("/gate.jpg", process.env.NEXT_PUBLIC_BASE_URL as string).href,
    ],
    type: "website",
  },
};

const page: NextPage = () => {
  return (
    <div className="bg-light">
      <div className="maxWidth p-6">
        <div className="">
          <h1 className="text-3xl md:text-4xl text-accent text-center pt-6 font-bold">
            RUN Campus Video Tours
          </h1>
          <div className="">
            <p className="md:w-2/4 text-center mx-auto py-4">
              Explore popular routes across Redeemers University campus with our
              step-by-step video guides. Perfect for new students and visitors
              to navigate between key locations with ease.
            </p>
            <div className="h-1 w-16 mx-auto bg-accent justify-center"></div>
          </div>
        </div>
      </div>
      <Tour />
    </div>
  );
};

export default page;
