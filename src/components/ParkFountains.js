// import { Map, Marker, Popup, MarkerClusterGroup } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// const redIcon = new Icon({
//   iconUrl:
//     'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
//   shadowUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const ParkFountains = (props) => {
//   const [zoom, setZoom] = useState(13);
//   const [fountains, setFountains] = useState([]);

//   useEffect(() => {
//     axios
//       .get('your_backend_url')
//       .then((res) => setFountains(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Map onZoomEnd={(e) => setZoom(e.target._zoom)} zoom={zoom}>
//       <MarkerClusterGroup>
//         {fountains
//           .filter(
//             (fountain) => fountain.zoom > zoom - 1 && fountain.zoom < zoom + 1
//           )
//           .map((fountain) => (
//             <Marker
//               key={fountain.id}
//               position={[fountain.latitude, fountain.longitude]}
//               icon={redIcon}
//             >
//               <Popup>
//                 <p>{fountain.name}</p>
//                 <p>{fountain.details}</p>
//               </Popup>
//             </Marker>
//           ))}
//       </MarkerClusterGroup>
//     </Map>
//   );
// };

// export default ParkFountains;
