import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

const redIcon = new L.Icon({
  iconUrl:
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function LocationMarker() {
  const map = useMap();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 });
    map.on('locationfound', (e) => {
      setLocation(e.latlng);
    });
  }, [map]);

  return location ? (
    <Marker position={[location.lat, location.lng]} icon={redIcon} />
  ) : null;
}

export default LocationMarker;
