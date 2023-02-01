// import { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// import './App.css';
// import LocationMarker from './components/LocationMarker';
// import axios from 'axios';
// // import ParkFountains from './components/ParkFountains';

// export const URL = process.env.REACT_APP_BACKEND_URL;

// const getMarkerDb = () => {
//   return axios
//     .get(`${process.env.REACT_APP_BACKEND_URL}/fountains`)

//     .then((response) => {
//       return response.data;
//     })

//     .catch((err) => console.log(err));
// };
// const blueIcon = new L.Icon({
//   iconUrl:
//     'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
//   shadowUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });
// function App() {
//   const [geojsonData, setGeojsonData] = useState([]);
//   console.log(geojsonData);
//   useEffect(() => {
//     getMarkerDb().then((markers) => {
//       setGeojsonData(markers);
//     });
//   }, []);

//   return (
//     <div id='map'>
//       <MapContainer
//         style={{ height: '100vh', width: '100wh' }}
//         zoom={13}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//         />
//         <GeoJSON data={geojsonData} />
//         <LocationMarker />

//         {geojsonData.map((fountain) => (
//           <Marker
//             key={fountain.id}
//             position={[fountain.latitude, fountain.longitude]}
//             icon={blueIcon}
//           >
//             <Popup>
//               Name:{fountain.name} <br /> Details:{fountain.details}
//             </Popup>
//           </Marker>
//         ))}
      
//       </MapContainer>
//     </div>
//   );
// }

// export default App;
