import { useEffect, useState } from 'react';
import { Marker, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';

const blackIcon = new L.Icon({
  iconUrl:
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
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
    map.locate({ setView: true, maxZoom: 11 });
    map.on('locationfound', (e) => {
      setLocation(e.latlng);
    });
  }, [map]);

  return location ? (
    <Marker position={[location.lat, location.lng]} icon={blackIcon}>
      <Popup>
        You are dowsing here! <br />
        {location.lat}
        <br />
        {location.lng}
      </Popup>
    </Marker>
  ) : null;
}

export default LocationMarker;
