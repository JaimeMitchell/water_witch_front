import './App.css';
import 'leaflet/dist/leaflet.css';

// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function App() {
  
  return (
    
        
        <div id="map">
          <h1>Water Witch</h1>
          <h3>Douse around the map to find a fill station</h3>
          <MapContainer center={[40.7199, 73.9775]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
        </div>
        
    
  );
}

export default App;
