import { useEffect, useState } from 'react';
import { Marker, useMap, Popup } from 'react-leaflet';
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

function LocationMarker(props) {
  const map = useMap();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 13 });
    map.on('locationfound', (e) => {
      setLocation(e.latlng);
    });
  }, [map]);

  return location ? (
    <Marker position={[location.lat, location.lng]} icon={redIcon}>
      <Popup>Here you are!</Popup>
    </Marker>
  ) : null;
}

export default LocationMarker;
