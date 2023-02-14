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
      `https://api.locationiq.com/v1/autocomplete?key=${apiKey}&q=${query}&limit=5&countrycodes=use&dedupe=1`

      //Query if loading LOCATIONIQ STATIC MAP
      //<img src='https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=<latitude>,<longitude>&zoom=<zoom>&size=<width>x<height>&format=&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>'>
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
        <button type='submit'>Get GeoCoordinates</button>
        <ul>
          {results.map(({ label, x, y }, index) => (
            <li
              className='search-results'
              key={index}
              onClick={() => setSelectedResult({ label, x, y })}
            >
              <br />
              {label}
              <br />
              {x}
              <br />
              {y}
              <br />
            </li>
          ))}
        </ul>
      </form>
      {selectedResult && (
        <MapContainer>
          <Marker position={[selectedResult.x, selectedResult.y]}>
            <Popup>
              {selectedResult.label}
              <br />
              {[selectedResult.x, selectedResult.y]}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default GeoCodeBar;
