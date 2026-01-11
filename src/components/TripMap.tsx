'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Location {
  name: string;
  coordinates: [number, number];
  dates: string;
  duration: string;
  href: string;
  color: string;
}

const locations: Location[] = [
  {
    name: 'Dublin',
    coordinates: [53.3498, -6.2603],
    dates: 'Jun 22-23',
    duration: '2 nights',
    href: '/dublin',
    color: '#22c55e', // green
  },
  {
    name: 'Barcelona',
    coordinates: [41.3851, 2.1734],
    dates: 'Jun 23 - Jul 6',
    duration: '2 weeks',
    href: '/barcelona',
    color: '#f59e0b', // amber
  },
  {
    name: 'Dingle',
    coordinates: [52.1409, -10.2671],
    dates: 'Jul 6-13',
    duration: '1 week',
    href: '/dingle',
    color: '#3b82f6', // blue
  },
  {
    name: 'Connemara',
    coordinates: [53.4549, -9.9000],
    dates: 'Jul 13-20',
    duration: '1 week',
    href: '/connemara',
    color: '#a855f7', // purple
  },
];

// Route coordinates for the travel path
const routeCoordinates: [number, number][] = [
  [53.3498, -6.2603],   // Dublin
  [41.3851, 2.1734],    // Barcelona
  [52.1409, -10.2671],  // Dingle
  [53.4549, -9.9000],   // Connemara
];

export default function TripMap() {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: React.ComponentType<React.PropsWithChildren<{ center: [number, number]; zoom: number; className?: string; scrollWheelZoom?: boolean }>>;
    TileLayer: React.ComponentType<{ attribution: string; url: string }>;
    Marker: React.ComponentType<React.PropsWithChildren<{ position: [number, number]; icon?: L.Icon | L.DivIcon }>>;
    Popup: React.ComponentType<React.PropsWithChildren>;
    Polyline: React.ComponentType<{ positions: [number, number][]; pathOptions?: { color?: string; weight?: number; dashArray?: string } }>;
  } | null>(null);
  const [L, setL] = useState<typeof import('leaflet') | null>(null);

  useEffect(() => {
    // Dynamically import Leaflet on client side only
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
    ]).then(([reactLeaflet, leaflet]) => {
      setMapComponents({
        MapContainer: reactLeaflet.MapContainer,
        TileLayer: reactLeaflet.TileLayer,
        Marker: reactLeaflet.Marker,
        Popup: reactLeaflet.Popup,
        Polyline: reactLeaflet.Polyline,
      });
      setL(leaflet.default);
    });
  }, []);

  if (!MapComponents || !L) {
    return (
      <div className="h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, Polyline } = MapComponents;

  // Create custom marker icons
  const createIcon = (color: string) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        background-color: ${color};
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  };

  // Center point between all locations
  const center: [number, number] = [48.5, -3.0];

  return (
    <div className="relative">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <MapContainer
        center={center}
        zoom={4}
        className="h-[400px] rounded-2xl z-0"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Draw route line */}
        <Polyline
          positions={routeCoordinates}
          pathOptions={{
            color: '#64748b',
            weight: 2,
            dashArray: '10, 10',
          }}
        />

        {/* Add markers for each location */}
        {locations.map((location, index) => (
          <Marker
            key={location.name}
            position={location.coordinates}
            icon={createIcon(location.color)}
          >
            <Popup>
              <div className="text-center min-w-[120px]">
                <div className="font-bold text-gray-900">{location.name}</div>
                <div className="text-sm text-gray-600">{location.dates}</div>
                <div className="text-xs text-gray-500 mb-2">{location.duration}</div>
                <Link
                  href={location.href}
                  className="text-sm text-blue-600 hover:underline"
                >
                  View details →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]">
        <div className="text-xs font-medium text-gray-700 mb-2">Trip Route</div>
        <div className="space-y-1">
          {locations.map((location, index) => (
            <div key={location.name} className="flex items-center gap-2 text-xs">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: location.color }}
              />
              <span className="text-gray-600">
                {index + 1}. {location.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
