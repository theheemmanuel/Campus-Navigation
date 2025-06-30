import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

interface MapComponentProps {
  userLocation: [number, number] | null;
  showUserLocation: boolean;
  campusPlaces: { name: string; position: [number, number] }[];
}

function LocationUpdater({
  userLocation,
}: {
  userLocation: [number, number] | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (userLocation) {
      map.flyTo(userLocation, 18, {
        duration: 1,
        easeLinearity: 0.25,
      });
    }
  }, [userLocation, map]);

  return null;
}

const MapComponent = ({
  userLocation,
  showUserLocation,
  campusPlaces,
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
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri"
        maxZoom={18}
      />

      {/* Campus places */}
      {campusPlaces.map((place, index) => (
        <Marker key={index} position={place.position} icon={createIcon()}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}

      {/* User location with continuous updates */}
      {showUserLocation && userLocation && (
        <>
          <Marker position={userLocation} icon={createRedIcon()}>
            <Popup>You are here</Popup>
          </Marker>
          <LocationUpdater userLocation={userLocation} />
        </>
      )}
    </MapContainer>
  );
};

export default MapComponent;
