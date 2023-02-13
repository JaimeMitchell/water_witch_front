import { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import './App.css';
import GeoCodeBar from './components/GeoCodeBar';
import LocationMarker from './components/LocationMarker';
import Menu from './components/Menu';
import WaterForm from './components/WaterForm';
import axios from 'axios';

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

const greenIcon = new L.Icon({
  iconUrl:
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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

const yellowIcon = new L.Icon({
  iconUrl:
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const addFountainAPI = (marker) => {
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/fountains`, marker)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

const App = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedBorough, setSelectedBorough] = useState('');
  const [fountains, setFountains] = useState([]);
  const [icon, setIcon] = useState(blueIcon);
  const [selectedOption, setSelectedOption] = useState('map');

  const handleFormSubmit = (form) => {
    addFountainAPI(form)
      .then((newMarker) => {
        setFountains((prevMarkers) => [...prevMarkers, newMarker]);
      })
      .catch((err) => console.log(err));
  };

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
    if (selectedType === '') {
      setIcon(blueIcon);
    } else if (
      selectedType === 'Private Fill Station' ||
      selectedType === 'Private Hose Bibb'
    ) {
      setIcon(redIcon);
    } else if (
      selectedType === 'Public Fill Station' ||
      selectedType === 'Public Hose Bibb' ||
      selectedType === 'Park Drinking Fountain'
    ) {
      setIcon(blueIcon);
    } else if (
      selectedType === 'Non-Profit Fill Station' ||
      selectedType === 'Non-Profit Hose Bibb'
    ) {
      setIcon(greenIcon);
    } else if (selectedType === 'Bottle') {
      setIcon(yellowIcon);
    }
  }, [selectedType]);

  //Refresh fountains on url change
  useEffect(() => {
    const getFountains = async () => {
      const response = await axios.get(requestUrl);
      setFountains(response.data);
    };

    getFountains();
  }, [requestUrl]);

  const apiKey = 'pk.2ed7f8e36711bc4adaa746f1efdc0626';
  return (
    <div>
      <GeoCodeBar apiKey={apiKey} />
      <div>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value='map'>Show Map</option>
          <option value='menu'>Filter</option>
          <option value='form'>Add Water Location</option>
        </select>
      </div>
      <div>
        {selectedOption === 'map' && (
          <MapContainer className='fullscreen-component'></MapContainer>
        )}
        {selectedOption === 'form' && (
          <WaterForm
            className='fullscreen-component form'
            handleFormSubmit={handleFormSubmit}
          />
        )}
        {selectedOption === 'menu' && (
          <Menu
            className='fullscreen-component menu'
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedBorough={selectedBorough}
            setSelectedBorough={setSelectedBorough}
          />
        )}
      </div>

      <MapContainer
        center={[40.7157, -73.8667]}
        style={{ height: '100vh', width: '100vw' }}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker />
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
              icon={icon}
            >
              <Popup>
                Name: {fountain.name} <br /> Details: {fountain.details} <br />
                Type: {fountain.type} <br /> Lat/Lon: <br />
                {fountain.latitude} <br />
                {fountain.longitude}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default App;
