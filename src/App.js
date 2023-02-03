import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './App.css';
import LocationMarker from './components/LocationMarker';
import axios from 'axios';

export const URL = process.env.REACT_APP_BACKEND_URL;

// const getMarkerDb = () => {
//   return axios
//     .get(`${process.env.REACT_APP_BACKEND_URL}/fountains`)

//     .then((response) => {
//       return response.data;
//     })

//     .catch((err) => console.log(err));
// };
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

function App() {
  const [fountains, setFountains] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/fountains`)
      .then((res) => setFountains(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   getMarkerDb().then((markers) => {
  //     setFountinas(markers);
  //   });
  // }, []);
  const customMarker = (cluster) => {
    const childrenCount = cluster.getChildCount();
    let fillColor = '#11cbd7';
  
    return L.divIcon({
      html: `
        <svg width="32" height="43">
          <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M16,28.5c-5.252,0-9.5-4.248-9.5-9.5S10.748,9,16,9s9.5,4.248,9.5,9.5S21.252,28.5,16,28.5z" fill="${fillColor}" />
        </svg>
      `,
      className: 'marker-cluster-raindrop',
      iconSize: new L.Point(32, 43)
    });
  };
  return (
    <MapContainer
      iconCreateFunction={customMarker}
      center={[40.7157, -73.8667]}
      style={{ height: '100vh', width: '100wh' }}
      zoom={11}
      scrollWheelZoom={true}
    >
      {/* {(addressPoints as AdressPoint).map((address, index) => (
  <Marker
    key={index}
    position={[address[0], address[1]]}
    title={address[2]}
    icon={customIcon}
  ></Marker>
))} */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <GeoJSON data={fountains} />

      <MarkerClusterGroup
        chunkedLoading
        id = 'marker-cluster'
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
  );
}

export default App;
