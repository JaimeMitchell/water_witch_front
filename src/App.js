import { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './App.css';
import LocationMarker from './components/LocationMarker';
import Menu from './components/Menu';
import axios from 'axios';
export const URL = process.env.REACT_APP_BACKEND_URL;

export const getFountainsAPI = () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/fountains`)

    .then((response) => {
      return response.data;
    })

    .catch((err) => console.log(err));
};

const blueIcon = new L.Icon({
  iconUrl:
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const App = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedBorough, setSelectedBorough] = useState('');
  const [fountains, setFountains] = useState([]);

  const requestUrl = useMemo(() => {
    let url = `${process.env.REACT_APP_BACKEND_URL}/fountains`;
    if (selectedType) {
      url += `?type=${selectedType}`;
    }
    if (selectedBorough) {
      url += `${selectedType ? '&' : '?'}borough=${selectedBorough}`;
    }
    return url;
  }, [selectedType, selectedBorough]);

  useEffect(() => {
    const getFountains = async () => {
      const response = await axios.get(requestUrl);
      setFountains(response.data);
    };

    getFountains();
  }, [requestUrl]);

  return (
    <div>
      <Menu
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedBorough={selectedBorough}
        setSelectedBorough={setSelectedBorough}
      >
        MENU
      </Menu>
      <MapContainer
        center={[40.7157, -73.8667]}
        style={{ height: '100vh', width: '100wh' }}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <GeoJSON data={fountains} />
        <MarkerClusterGroup
          chunkedLoading
          id='marker-cluster'
          animateAddingMarkers={false}
          maxClusterRadius={88}
        >
          {fountains.map((fountain) => (
            <Marker
              key={fountain.id}
              position={[fountain.latitude, fountain.longitude]}
              icon={blueIcon}
            >
              <Popup>
                {fountain.name} <br /> Details: {fountain.details} <br /> Type:{' '}
                {fountain.type}
              </Popup>
            </Marker>
          ))}
          <LocationMarker />
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default App;
