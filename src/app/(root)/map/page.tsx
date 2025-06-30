"use client";

import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { campusPlaces } from "@/components/Map/CampusPlaces";
import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import('@/components/Map/MapComponent'),
  { 
    ssr: false,
    loading: () => <p>Loading map...</p>
  }
);

const MapPage = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [watchId, setWatchId] = useState<number | null>(null);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      // Stop any existing watcher
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }

      // Start watching position with high accuracy
      const id = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setShowUserLocation(true);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Could not get your location. Please ensure location services are enabled."
          );
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000,
        }
      );
      setWatchId(id);
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Clean up watcher when component unmounts
  useEffect(() => {
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [watchId]);

  useEffect(() => {
    if (showUserLocation && "geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const newLocation: [number, number] = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          setUserLocation(newLocation); // This will update the marker
        },
        (error) => {
          console.error("Error watching position:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 1000, // Update every second
        }
      );

      setWatchId(watchId);

      // Cleanup function
      return () => {
        if (watchId) {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    }
  }, [showUserLocation]);

  return (
    <div className="bg-light">
      <div className="maxWidth p-4">
        <div className="flex justify-center">
          <button
            onClick={handleLocationClick}
            className="bg-accent rounded-xl px-6 text-white mt-4 py-2 inline cursor-pointer"
          >
            <FaLocationDot className="inline mr-2" />
            Locate Me
          </button>
        </div>
        <div className="my-8 bg-white p-4 rounded-xl flex justify-center items-center h-[50vh]">
          <MapComponent
            userLocation={userLocation}
            showUserLocation={showUserLocation}
            campusPlaces={campusPlaces}
          />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
