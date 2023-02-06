import React from 'react';

const Menu = ({
  selectedType,
  setSelectedType,
  selectedBorough,
  setSelectedBorough,
}) => {
  return (
    <div>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value=''>ALL TYPES</option>
        <option value='PUBLIC DRINKING FOUNTAIN'>PARK DRINKING FOUNTAIN</option>
        <option value='PUBLIC FILL STATION'>PUBLIC FILL STATION</option>
        <option value='PUBLIC HOSE BIB'>PUBLIC HOSE BIB</option>
        <option value='PRIVATE HOSE BIB'>PRIVATE HOSE BIB</option>
        <option value='NON-PROFIT HOSE BIB'>NON-PROFIT HOSE BIB</option>
        <option value='PUBLIC ALT'>PUBLIC ALT</option>
        <option value='NON-PROFIT ALT'>NON-PROFIT ALT</option>
        <option value='PRIVATE ALT'>PRIVATE ALT</option>
      </select>
      <select
        value={selectedBorough}
        onChange={(e) => setSelectedBorough(e.target.value)}
      >
        <option value=''>All Boroughs</option>
        <option value='Manhattan'>Manhattan</option>
        <option value='Brooklyn'>Brooklyn</option>
        <option value='Bronx'>Bronx</option>
        <option value='Queens'>Queens</option>
        <option value='Staten Island'>Staten Island</option>
      </select>
    </div>
  );
};

export default Menu;
