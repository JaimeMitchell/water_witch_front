import React from 'react';
import { Form } from 'react-bootstrap';

const FilterMenu = ({
  selectedType,
  setSelectedType,
  selectedBorough,
  setSelectedBorough,
}) => {
  return (
    <div>
      <h4>Filters</h4>
      <Form>
        <Form.Group controlId='formTypeSelect'>
          <Form.Label>Type</Form.Label>
          <Form.Control
            as='select'
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value=''>All Types</option>
            <option value='Public Fill Station'>Public Fill Station</option>
            <option value='Non-Profit Fill Station'>
              Non-Profit Fill Station
            </option>
            <option value='Private Fill Station'>Private Fill Station</option>
            <option value='Public Hose Bibb'>Public Hose Bib</option>
            <option value='Private Hose Bibb'>Private Hose Bib</option>
            <option value='Non-Profit Hose Bibb'>Non-Profit Hose Bib</option>
            <option value='Bottle'>Bottle</option>
            <option value='Park Drinking Fountain'>
              Park Drinking Fountain
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='formBoroughSelect'>
          <Form.Label>Boroughs</Form.Label>
          <Form.Control
            as='select'
            value={selectedBorough}
            onChange={(e) => setSelectedBorough(e.target.value)}
          >
            <option value=''>All Boroughs</option>
            <option value='Manhattan'>Manhattan</option>
            <option value='Brooklyn'>Brooklyn</option>
            <option value='Bronx'>Bronx</option>
            <option value='Queens'>Queens</option>
            <option value='Staten Island'>Staten Island</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FilterMenu;
