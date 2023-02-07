import React from 'react';
import { Form } from 'react-bootstrap';

const Menu = ({
  selectedType,
  setSelectedType,
  selectedBorough,
  setSelectedBorough,
}) => {
  return (
    <Form>
      <Form.Group controlId='formTypeSelect'>
        <Form.Label>Type</Form.Label>
        <Form.Control
          as='select'
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value=''>All Types</option>
          <option value='Park Drinking Fountain'>
            Park Drinking Fountains
          </option>
          <option value='Public Fill Station'>Public Fill Station</option>
          <option value='Public Hose Bib'>Public Hose Bib</option>
          <option value='Private Hose Bib'>Private Hose Bib</option>
          <option value='Non-Profit Hose Bib'>Non-Profit Hose Bib</option>
          <option value='Public Alt'>Public Alt</option>
          <option value='Non-Profit Alt'>Non-Profit Alt</option>
          <option value='Private Alt'>Private Alt</option>
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
  );
};

export default Menu;
