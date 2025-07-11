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
  id: string;
  title: string;
  image: string;
  email: string;
  label?: string;
  description?: string;
  category?: string;
  info?: string;
}

interface LocationContextType {
  locations: Location[];
  loading: boolean;
  error: string | null;
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      setError(null);

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
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      console.error("Error fetching locations:", err);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchLocations();
  }, []);

  const value: LocationContextType = {
    locations,
    loading,
    error,
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
