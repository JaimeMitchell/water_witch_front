import { useState, useEffect, useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet';

import './App.css';
import LocationMarker from './components/LocationMarker';

function App() {
  const [geojsonData, setGeojsonData] = useState([]);

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/bevm-apmm.json?$limit=3871&$offset=0')
      .then((response) => response.json())
      .then((data) => setGeojsonData(data));
      console.log(geojsonData)

  }, []);
  
  const filteredData = geojsonData.filter((feature) => feature.borough === 'M');
  console.log(filteredData)
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
        <LocationMarker />
        <GeoJSON data={filteredData} />
        <Marker position={[40.72316, -73.984829394]}>
          <Popup>
            East Village, NYC <br /> Douse around for water
          </Popup>
        </Marker>
        {filteredData.map((fountain, id) => (
          <Marker
            position={[
              fountain.the_geom.coordinates[1],
              fountain.the_geom.coordinates[0],
            ]}
            key={id}
          >
            <Popup>
              {fountain.signname} <br /> {fountain.descriptio}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
