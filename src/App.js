import { useState, useEffect, useContext } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import './App.css';
import LocationMarker from './components/LocationMarker';
import ParkFountains from './components/ParkFountains';
import URL from './crud';

function App() {
  return (
    <div id='map'>
      <MapContainer style={{ height: '100vh', width: '100wh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker />

        <ParkFountains />
      </MapContainer>
    </div>
  );
}

export default App;
