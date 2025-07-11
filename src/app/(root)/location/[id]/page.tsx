import { Metadata, NextPage } from "next";
import React from "react";
import CurrentLocation from "@/components/Location/CurrentLocation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const locationName = decodeURIComponent(id);

  return {
    title: `${locationName} | Redeemer's University`,
    description: `Find information about ${locationName} at Redeemer's University campus and get directions to other locations.`,
    openGraph: {
      title: `${locationName} | Redeemer's University`,
      description: `Find information about ${locationName} at Redeemer's University campus and get directions to other locations.`,
      images: [
        new URL("/gate.jpg", process.env.NEXT_PUBLIC_BASE_URL as string).href,
      ],
      type: "website",
    },
  };
}

const LocationPage: NextPage<PageProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="bg-light">
      <div className="maxWidth px-6 py-12">
        <CurrentLocation locationId={id} />
      </div>
    </div>
  );
};

export default LocationPage;
