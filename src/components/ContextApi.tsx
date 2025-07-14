"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

// Define types for your location data
interface Location {
  id: number;
  title: string;
  image: string;
  email: string;
  label?: string;
  description?: string;
  category?: string;
  info?: string;
}

interface videotour {
  id: number;
  title: string;
  video: string;
  description: string;
  duration: string;
  img: string;
}

interface LocationContextType {
  locations: Location[];
  videos: videotour[];
  loading: boolean;
  videoloading: boolean;
}

export const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

interface LocationContextProviderProps {
  children: ReactNode;
}

export const LocationContextProvider = ({
  children,
}: LocationContextProviderProps) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [videos, setVideos] = useState<videotour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [videoloading, setVideoLoading] = useState<boolean>(true);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_SUPABASE_URL + "/CampusNavigation",
        {
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            Authorization: `Bearer ${process.env
              .NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
          },
          // cache: "no-store",
          next: { revalidate: 10 },
        }
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch locations: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      console.log(data);
      setLocations(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching locations:", err);
    }
  };
  const fetchVideos = async () => {
    try {
      setVideoLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_SUPABASE_URL + "/videoTours",
        {
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            Authorization: `Bearer ${process.env
              .NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
          },
          // cache: "no-store",
          next: { revalidate: 10 },
        }
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch locations: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      console.log(data);
      setVideos(data);
      setVideoLoading(false);
    } catch (err) {
      console.error("Error fetching locations:", err);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchLocations();
    fetchVideos();
  }, []);

  const value: LocationContextType = {
    locations,
    loading,
    videos,
    videoloading,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the context
export const useLocationContext = () => {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error(
      "useLocationContext must be used within a LocationContextProvider"
    );
  }

  return context;
};
