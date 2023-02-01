import { React, useState, useEffect } from 'react';
import {
  Icon,
  MarkerClusterGroup,
  Popup,
  Marker,
  leafletMapContainerClassName,
  TileLayer,
  coordArray,
} from 'leaflet';
import { useMap } from 'react-leaflet';
import axios from 'axios';
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
//     <useMap onZoomEnd={(e) => setZoom(e.target._zoom)} zoom={zoom}>
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
//     </useMap>
//   );
// };

// export default ParkFountains;

//-------------------------------------------
const ParkFountains = (props) => {
  const [zoom, setZoom] = useState(13);
  const [fountains, setFountains] = useState([]);

  useEffect(() => {
    axios
      .get('your_backend_url')
      .then((res) => setFountains(res.data))
      .catch((err) => console.log(err));
  }, []);

<useMap
  center={this.props.center}
  zoom={zoom}
  className={leafletMapContainerClassName}
  scrollWheelZoom={false}
  maxZoom={18}
  preferCanvas={false}
>
  {() => {
    const MarkerClusterGroup = require('react-leaflet-markercluster').default;
    const L = require('leaflet');

    const myIcon = L.icon({
      iconUrl: require('../assets/marker.svg'),
      iconSize: [64, 64],
      iconAnchor: [32, 64],
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
    });

    return (
      <React.Fragment>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution=''
          setParams={true}
        />
        <MarkerClusterGroup>
          {coordArray.map((fountain) => {
            return (
              <Marker
                icon={myIcon}
                key={fountain.toString()}
                position={[fountain.lat, fountain.lng]}
              >
                {fountain.title && (
                  <Popup>
                    <span>{fountain.title}</span>
                  </Popup>
                )}
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </React.Fragment>
    );
  }}
</useMap>;}

// export default ParkFountains;

var data = [  {    "borough": "B",    "details": "In Playground",    "id": 6,    "latitude": 40.666701390972364,    "longitude": -73.8625945007143,    "name": "Pink Playground"  },  ...];

var coordArray = fountains.map(function(fountain) {
  return [fountain.latitude, fountain.longitude];
});

var polyline = L.polyline(coordArray, {color: 'red'}).addTo(map);
