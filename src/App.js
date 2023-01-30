import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';

import './App.css';
import LocationMarker from './components/LocationMarker';
import axios from 'axios';

export const URL = process.env.REACT_APP_BACKEND_URL;

const convertToGeoJson = (Marker) => ({
  type: "Feature",
  properties: {
    id: Marker.id,
    name: Marker.name,
    description: Marker.description,
    borough: Marker.borough
  },
  geometry: {
    type: "Point",
    geometry: [Marker.longitude, Marker.latitude]
  }
});


const getMarkerDb = () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/fountains`)

    .then((response) => {
      return response.data.map(convertToGeoJson);
    })

    .catch((err) => console.log(err));
};

function App() {
  const [geojsonData, setGeojsonData] = useState([]);

  useEffect(() => {
    getMarkerDb().then((markers) => {
      setGeojsonData(markers);
    });
  }, []);

  return (
    <div id='map'>
      <MapContainer
        style={{ height: '100vh', width: '100wh' }}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <GeoJSON data={geojsonData}/>
        <LocationMarker />
        
        {geojsonData.map((fountain, id) => (
          
          <Marker key={fountain.id} position={(fountain.latitude,fountain.longitude)} >
            <Popup>
              {fountain.name} <br /> {fountain.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
