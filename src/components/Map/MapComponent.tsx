/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const createIcon = () => {
  return L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

const createRedIcon = () => {
  return L.divIcon({
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 52">
        <path fill="#ff0000" d="M16 1c-8 0-15 7-15 15 0 10 15 35 15 35s15-25 15-35c0-8-7-15-15-15z"/>
        <circle cx="16" cy="16" r="6" fill="#fff"/>
      </svg>
    `,
    iconSize: [32, 52],
    iconAnchor: [16, 52],
    popupAnchor: [0, -52],
    className: "red-marker-icon",
  });
};

const createDestinationIcon = () => {
  return L.divIcon({
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 52">
        <path fill="#00ff00" d="M16 1c-8 0-15 7-15 15 0 10 15 35 15 35s15-25 15-35c0-8-7-15-15-15z"/>
        <circle cx="16" cy="16" r="6" fill="#fff"/>
      </svg>
    `,
    iconSize: [32, 52],
    iconAnchor: [16, 52],
    popupAnchor: [0, -52],
    className: "destination-marker-icon",
  });
};

interface MapComponentProps {
  userLocation: [number, number] | null;
  showUserLocation: boolean;
  campusPlaces: { name: string; position: [number, number] }[];
  selectedDestination: { name: string; position: [number, number] } | null;
  onLocationSelect: (place: {
    name: string;
    position: [number, number];
  }) => void;
}

function RoutingMachine({
  userLocation,
  destination,
}: {
  userLocation: [number, number] | null;
  destination: { name: string; position: [number, number] } | null;
}) {
  const map = useMap();
  const routingControlRef = useRef<L.Routing.Control | null>(null);

  useEffect(() => {
    if (!map) return;

    // Remove existing routing control
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
      routingControlRef.current = null;
    }

    // Add new routing control if both locations exist
    if (userLocation && destination) {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(userLocation[0], userLocation[1]),
          L.latLng(destination.position[0], destination.position[1]),
        ],
        routeWhileDragging: false,
        addWaypoints: false,
        createMarker: () => null, // Don't create default markers
        lineOptions: {
          styles: [
            {
              color: "#000079",
              weight: 4,
              opacity: 0.8,
            },
          ],
          extendToWaypoints: true,
          missingRouteTolerance: 0,
        },
        show: false, // Hide the instruction panel
        collapsible: true,
      } as any).addTo(map);

      routingControlRef.current = routingControl;

      // Hide the routing instructions container
      const routingContainer = document.querySelector(
        ".leaflet-routing-container"
      );
      if (routingContainer) {
        (routingContainer as HTMLElement).style.display = "none";
      }
    }

    return () => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
        routingControlRef.current = null;
      }
    };
  }, [map, userLocation, destination]);

  return null;
}

function LocationUpdater({
  userLocation,
}: {
  userLocation: [number, number] | null;
}) {
  const map = useMap();
  const hasInitiallyFocused = useRef(false);
  const userHasMoved = useRef(false);

  useEffect(() => {
    // Only fly to user location on first load
    if (userLocation && !hasInitiallyFocused.current) {
      map.flyTo(userLocation, 18, {
        duration: 1,
        easeLinearity: 0.25,
      });
      hasInitiallyFocused.current = true;
    }
  }, [userLocation, map]);

  useEffect(() => {
    // Track when user manually moves the map
    const handleMoveStart = () => {
      userHasMoved.current = true;
    };

    map.on("movestart", handleMoveStart);

    return () => {
      map.off("movestart", handleMoveStart);
    };
  }, [map]);

  return null;
}

const MapComponent = ({
  userLocation,
  showUserLocation,
  campusPlaces,
  selectedDestination,
  onLocationSelect,
}: MapComponentProps) => {
  const defaultCenter: [number, number] = [
    7.680255096806807, 4.4596083445990615,
  ];
  const defaultZoom = 16;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
      className="z-100"
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri"
        maxZoom={18}
      />

      {/* Campus places */}
      {campusPlaces.map((place, index) => (
        <Marker
          key={index}
          position={place.position}
          icon={
            selectedDestination?.name === place.name
              ? createDestinationIcon()
              : createIcon()
          }
          // eventHandlers={{
          //   click: () => onLocationSelect(place),
          // }}
        >
          <Popup>
            <div>
              <strong>{place.name}</strong>
              <br />
              <button
                onClick={() => onLocationSelect(place)}
                className="mt-2 bg-accent text-white px-3 cursor-pointer py-1 rounded text-sm"
              >
                Get Directions
              </button>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* User location with controlled updates */}
      {showUserLocation && userLocation && (
        <>
          <Marker position={userLocation} icon={createRedIcon()}>
            <Popup>You are here</Popup>
          </Marker>
          <LocationUpdater userLocation={userLocation} />
        </>
      )}

      {/* Routing */}
      <RoutingMachine
        userLocation={userLocation}
        destination={selectedDestination}
      />
    </MapContainer>
  );
};

export default MapComponent;
