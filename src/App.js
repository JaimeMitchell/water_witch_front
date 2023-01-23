import { React, useState, useEffect, useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import ParkFountains from './components/ParkFountains';
import './App.css';

function App(props) {
 
  const [geojsonData, setGeojsonData] = useState([]);
  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/8kvz-b7tv.json')
      .then((response) => response.json())
      .then((data) => setGeojsonData(data));
  }, []);

  return (
    <div id='map'>
      <MapContainer
        className='map'
        center={[40.72316, -73.984829394]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <GeoJSON data={geojsonData} />
        <Marker position={[40.72316, -73.984829394]}>
          <Popup>
            East Village, NYC <br /> Douse around for water
          </Popup>
        </Marker>
        {/* <ParkFountains
        /> */}
      </MapContainer>
    </div>
  );
}

export default App;
