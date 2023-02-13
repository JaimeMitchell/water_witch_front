import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, Marker, Popup } from 'react-leaflet';

const GeoCodeBar = ({ apiKey }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.locationiq.com/v1/autocomplete?key=${apiKey}&q=${query}&limit=5&dedupe=1`
    );
    setResults(
      response.data.map(({ lat, lon, display_name }) => ({
        label: display_name,
        x: lat,
        y: lon,
      }))
    );
    if (response.data.length === 1) {
      setSelectedResult(response.data[0]);
    } else {
      setSelectedResult();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={query} onChange={handleChange} />
        <button type='submit'>Search</button>
        <ul>
          {results.map(({ label, x, y }, index) => (
            <li key={index} onClick={() => setSelectedResult({ label, x, y })}>
              {label}
            </li>
          ))}
        </ul>
      </form>
      {selectedResult && (
        <MapContainer>
          <Marker position={[selectedResult.x, selectedResult.y]}>
            <Popup>{selectedResult.label}</Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default GeoCodeBar;
