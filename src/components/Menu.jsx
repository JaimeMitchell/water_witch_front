import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const Menu = () => {

  const requestUrl = useMemo(
    () =>
      `${process.env.REACT_APP_BACKEND_URL}/fountains?type=${type}&borough=${borough}`,
    [type, borough]
  );

  useEffect(() => {
    const getFountains = async () => {
      const response = await axios.get(requestUrl);
      setFountains(response.data);
    };
    getFountains();
  }, [requestUrl]);

  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value=''>ALL TYPES</option>
        <option value='PUBLIC DRINKING FOUNTAIN'>PARK DRINKING FOUNTAIN</option>
        <option value='PUBLIC FILL STATION'>PUBLIC FILL STATION</option>
        <option value='PUBLIC HOSE BIB'>PUBLIC HOSE BIB</option>
        <option value='NON-PROFIT HOSE BIB'>NON-PROFIT HOSE BIB</option>
        <option value='PRIVATE HOSE BIB'>PRIVATE HOSE BIB</option>
        <option value='PUBLIC ALT'>PUBLIC ALT</option>
        <option value='NON-PROFIT ALT'>NON-PROFIT ALT</option>
        <option value='PRIVATE ALT'>PRIVATE ALT</option>
      </select>
      <select value={borough} onChange={(e) => setBorough(e.target.value)}>
        <option value=''>ALL BOROUGHS</option>
        <option value='M'>MANHATTAN</option>
        <option value='B'>BROOKLYN</option>
        <option value='X'>BRONX</option>
        <option value='Q'>QUEENS</option>
        <option value='S'>STATEN ISLAND</option>
      </select>
      {fountains.map((fountain) => (
        <div key={fountain.id}>{fountain.name}</div>
      ))}
    </div>
  );
};

export default Menu;
