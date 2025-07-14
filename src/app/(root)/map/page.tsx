"use client";

import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { campusPlaces } from "@/components/Map/CampusPlaces";
import LocationSearch from "@/components/Map/LocationSearch";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/Map/MapComponent"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const MapPage = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [watchId, setWatchId] = useState<number | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<{
    name: string;
    position: [number, number];
  } | null>(null);

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

  const handleLocationSelect = (place: {
    name: string;
    position: [number, number];
  }) => {
    setSelectedDestination(place);

    // If user location is not available, request it
    if (!userLocation) {
      handleLocationClick();
    }
  };

  const handleClearDestination = () => {
    setSelectedDestination(null);
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
          setUserLocation(newLocation); // This will update the marker and route
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
        <div className="">
          <h1 className="text-3xl md:text-4xl text-accent text-center pt-6 font-bold">
            RUN Campus Interactive Map
          </h1>
          <p className="md:w-2/4 text-center mx-auto py-6">
            Explore Redeemers University campus, find your way to buildings, and
            discover key locations with our interactive map. Never get lost on
            campus again!
          </p>
        </div>

        {/* Search Component */}
        <div className="mb-6">
          <LocationSearch
            campusPlaces={campusPlaces}
            onLocationSelect={handleLocationSelect}
            selectedDestination={selectedDestination}
            onClearDestination={handleClearDestination}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleLocationClick}
            className="bg-accent rounded-xl px-6 text-white mt-4 py-2 inline cursor-pointer"
          >
            <FaLocationDot className="inline mr-2" />
            {showUserLocation ? "Update Location" : "Locate Me"}
          </button>
        </div>

        {/* Instructions */}
        {selectedDestination && userLocation && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-blue-800">
              <strong>Navigation Active:</strong> Follow the blue route to reach{" "}
              <span className="font-semibold">{selectedDestination.name}</span>.
              The route will update automatically as you move.
            </p>
          </div>
        )}

        {selectedDestination && !userLocation && (
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <p className="text-yellow-800">
              <strong>Location Required:</strong> Please enable location
              services and click &quot;Locate Me&quot; to get directions to{" "}
              <span className="font-semibold">{selectedDestination.name}</span>.
            </p>
          </div>
        )}

        <div className="my-8 bg-white p-4 rounded-xl flex justify-center items-center md:h-[60vh] h-[70vh]">
          <MapComponent
            userLocation={userLocation}
            showUserLocation={showUserLocation}
            campusPlaces={campusPlaces}
            selectedDestination={selectedDestination}
            onLocationSelect={handleLocationSelect}
          />
        </div>

        {/* Usage Instructions */}
        <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-accent mb-4">
            How to Use Navigation
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">🔍 Search & Navigate:</h4>
              <ul className="space-y-1">
                <li>• Search for any campus location</li>
                <li>• Click on a location to get directions</li>
                <li>• Enable location services for real-time navigation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📍 Map Markers:</h4>
              <ul className="space-y-1">
                <li>
                  • <span className="text-red-600">Red marker:</span> Your
                  current location
                </li>
                <li>
                  • <span className="text-green-600">Green marker:</span>{" "}
                  Selected destination
                </li>
                <li>
                  • <span className="text-blue-600">Blue line:</span> Navigation
                  route
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
