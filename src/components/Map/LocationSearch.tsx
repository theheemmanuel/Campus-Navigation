"use client";

import { useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

interface LocationSearchProps {
  campusPlaces: { name: string; position: [number, number] }[];
  onLocationSelect: (place: {
    name: string;
    position: [number, number];
  }) => void;
  selectedDestination: { name: string; position: [number, number] } | null;
  onClearDestination: () => void;
}

const LocationSearch = ({
  campusPlaces,
  onLocationSelect,
  selectedDestination,
  onClearDestination,
}: LocationSearchProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Filter locations based on search input
  const filteredLocations = useMemo(() => {
    if (!searchInput.trim()) {
      return [];
    }
    return campusPlaces.filter((place) =>
      place.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput, campusPlaces]);

  const handleLocationClick = (place: {
    name: string;
    position: [number, number];
  }) => {
    onLocationSelect(place);
    setSearchInput("");
    setShowResults(false);
  };

  const clearSearch = () => {
    setSearchInput("");
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto z-199">
      {/* Search Input */}
      <div className="flex justify-center items-center gap-2 border-2 border-gray-300 rounded-3xl py-2 px-4 bg-white shadow-sm">
        <CiSearch size={24} className="text-gray-500" />
        <input
          type="text"
          className="outline-none w-full text-gray-700"
          placeholder="Search campus locations..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
        />
        {searchInput && (
          <button
            onClick={clearSearch}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoClose size={20} />
          </button>
        )}
      </div>

      {/* Search Results */}
      {showResults && filteredLocations.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {filteredLocations.map((place, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(place)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center gap-3"
            >
              <FaLocationDot className="text-accent flex-shrink-0" />
              <span className="text-gray-700">{place.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Selected Destination Display */}
      {selectedDestination && (
        <div className="mt-4 bg-accent text-white rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <span className="font-medium">
              Navigating to: {selectedDestination.name}
            </span>
          </div>
          <button
            onClick={onClearDestination}
            className="text-white hover:text-gray-200"
          >
            <IoClose size={20} />
          </button>
        </div>
      )}

      {/* Click outside to close results */}
      {showResults && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowResults(false)}
        />
      )}
    </div>
  );
};

export default LocationSearch;
