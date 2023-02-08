import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';

const waterObj = {
  latitude: 0,
  longitude: 0,
  address: '',
  name: '',
  details: '',
  borough: '',
  type: '',
  phone: 0,
  email: '',
};

const WaterForm = (props) => {
  const [formData, setFormData] = useState(waterObj);

  const handleChange = (event) => {
    let fieldValue = event.target.value;
    const fieldName = event.target.name;

    if (fieldName === 'latitude' || fieldName === 'longitude') {
      fieldValue = parseFloat(fieldValue);
    }
    if (fieldName === 'phone') {
      fieldValue = parseInt(fieldValue, 10);
    }
    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  //HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    props.handleFormSubmit(formData);
    setFormData(waterObj);
  };

  return (
    <form className='water-container' onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="latitude">Latitude:</label>
        <input
          size='sm'
          step="any"
          type='number'
          name='latitude'
          value={formData.latitude}
          onChange={handleChange}
          autoFocus={false}
          required
        />
      </div>

      <div class="form-group">
        <label for="longitude">Longitude:</label>
        <input
          size='sm'
          step="any"
          type='number'
          name='longitude'
          value={formData.longitude}
          onChange={handleChange}
          autoFocus={false}
          required
        />
      </div>

      <Form.Group as={Row} controlId='longitude'>
        <Form.Label column sm={2}>
          Longitude:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            size='sm'
            type='number'
            name='longitude'
            value={formData.longitude}
            onChange={handleChange}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='type'>
        <Form.Label column sm={2}>
          Type:
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            size='sm'
            type='radio'
            label='Park Drinking Fountain'
            name='type'
            id='ParkDrinkingFountain'
            value='Park Drinking Fountain'
            checked={formData.type === 'Park Drinking Fountain'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Public Fill Station'
            name='type'
            id='Public Fill Station'
            value='Public Fill Station'
            checked={formData.type === 'Public Fill Station'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Public Hose Bibb'
            name='type'
            id='Public Hose Bibb'
            value='Public Hose Bibb'
            checked={formData.type === 'Public Hose Bibb'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Non-Profit Hose Bibb'
            name='type'
            id='Non-Profit Hose Bibb'
            value='None-Profit Hose Bibb'
            checked={formData.type === 'Non-Profit Hose Bibb'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Private Hose Bibb'
            name='type'
            id='Private Hose Bibb'
            value='Private Hose Bibb'
            checked={formData.type === 'Private Hose Bibb'}
            onChange={handleChange}
          />

          <Form.Check
            type='radio'
            label='Public gallon or less'
            name='type'
            id='Public gallon or lesst'
            value='Public gallon or less'
            checked={formData.type === 'Public gallon or less'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Non-Profit gallon or less'
            name='type'
            id='Non-Profit gallon or less'
            value='None-Profit gallon or less'
            checked={formData.type === 'Non-Profit gallon or less'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Private gallon or less'
            name='type'
            id='Private gallon or less'
            value='Private gallon or less'
            checked={formData.type === 'Private gallon or less'}
            onChange={handleChange}
          />
        </Col>

        <Form.Group as={Row} controlId='name'>
          <Form.Label column sm={2}>
            Name:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type='text'
              placeholder='Location Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='address'>
          <Form.Label column sm={2}>
            Address:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type='text'
              placeholder='Address'
              name='address'
              value={formData.address}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Col sm={10}>
          <Form.Check
            type='radio'
            label='Manhattan'
            name='borough'
            id='Manhattan'
            value='Manhattan'
            checked={formData.borough === 'Manhattan'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Brooklyn'
            name='borough'
            id='Brooklyn'
            value='Brooklyn'
            checked={formData.borough === 'Brooklyn'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Bronx'
            name='borough'
            id='Bronx'
            value='Bronx'
            checked={formData.borough === 'Bronx'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Queens'
            name='borough'
            id='Queens'
            value='Queens'
            checked={formData.borough === 'Queens'}
            onChange={handleChange}
          />
          <Form.Check
            type='radio'
            label='Staten Island'
            name='borough'
            id='Staten Island'
            value='Staten Island'
            checked={formData.borough === 'Staten Island'}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='phone'>
        <Form.Label column sm={2}>
          Phone:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type=''
            placeholder='Phone Number'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='email'>
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            size='sm'
            type='email'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='details'>
        <Form.Label column sm={2}>
          Details:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type='text'
            placeholder='Additional Details'
            name='details'
            value={formData.details}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Button className='water-container' type='submit' value='Submit'>
        Submit
      </Button>
    </Form>
  );
};

WaterForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default WaterForm;
