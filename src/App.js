import { React, useState, useEffect, useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
// import ParkFountains from './components/ParkFountains';
import './App.css';
import LocationMarker from './components/LocationMarker';

function App(props) {
  const [geojsonData, setGeojsonData] = useState([]);
  console.log(geojsonData);
  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/bevm-apmm.json')
      .then((response) => response.json())
      .then((data) => setGeojsonData(data));
  }, []);

  const filteredData = geojsonData.filter((feature) => feature.borough === 'B');

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
        <LocationMarker/>
        <GeoJSON data={filteredData} />

        <Marker position={[40.72316, -73.984829394]}>
          <Popup>
            East Village, NYC <br /> Douse around for water
          </Popup>
        </Marker>
        {filteredData.map((fountain, id) => (
          //fountain is 1 object. the_geom is an object . coordinates is a list with 2 values.
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