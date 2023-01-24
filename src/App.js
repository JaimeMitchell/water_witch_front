import { useState, useEffect, useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap, useMapEvent, useMapEvents } from 'react-leaflet';

import './App.css';
// import LocationMarker from './components/LocationMarker';

function App() {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  
  const [geojsonData, setGeojsonData] = useState([]);

  console.log(geojsonData);

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/bevm-apmm.json?$limit=3871&$offset=0')
      .then((response) => response.json())
      .then((data) => setGeojsonData(data));
  }, []);
  
  // const filteredData = geojsonData.filter((feature) => feature.borough === 'M');

  return (
    <div id='map'>
      
      <MapContainer
       style={{ height: '100vh', width: '100wh' }}
        center={[40.72316, -73.984829394]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <LocationMarker/>
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
        {geojsonData.map((fountain, id) => (
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
