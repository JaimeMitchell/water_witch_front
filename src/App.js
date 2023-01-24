import { React, useState, useEffect, useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
// import ParkFountains from './components/ParkFountains';
import './App.css';

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
        <GeoJSON data={filteredData} />

        <Marker position={[40.72316, -73.984829394]}>
          <Popup>
            East Village, NYC <br /> Douse around for water
          </Popup>
        </Marker>
        {filteredData.map((fountain, id) => (
          //fountain is 1 object. the_geom is an object . coordinates is a list with 2 values. why is 1 displayed before 0?
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

// {geojsonData.features.map(feature => (
//   <Marker
//     key={feature.properties.objectid}
//     position={[feature.geometry.coordinates[0][0][1], feature.geometry.coordinates[0][0][0]]}>
// <Popup>
//   <p>{feature.properties.name}</p>
//   <p>Zipcode: {feature.properties.zipcode}</p>
//   <p>Community Board: {feature.properties.communityb}</p>
//   {/* Add other properties you want to display */}
// </Popup>
//     </Marker>))}
