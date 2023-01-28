import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios';
import 'react-leaflet-markercluster/dist/styles.min.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';


const ParkFountains = () => {
  const [fountains, setFountains] = useState([]);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/fountains`)
      .then((response) => setFountains(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleZoom = (e) => {
    setZoom(e.target._zoom);
  };

  return (
    <Map onZoomend={handleZoom}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {fountains
          .filter((fountain) => fountain.latitude && fountain.longitude)
          .filter((fountain) => {
            if (zoom >= 15) return true;
            // filter out markers that are not in the current view based on zoom level
            else return false;
          })
          .map((fountain) => (
            <Marker
              key={fountain.id}
              position={[fountain.latitude, fountain.longitude]}
            >
              <Popup>
                <div>
                  <h4>{fountain.name}</h4>
                  <p>{fountain.details}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MarkerClusterGroup>
    </Map>
  );
};

export default ParkFountains;
