import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';

const waterObj = {
  name: '',
  latitude: 40.7157,
  longitude: -73.8667,
  details: '',
  borough: '',
  type: '',
  phone: '',
  email: '',
};

const WaterForm = (props) => {
  const [formData, setFormData] = useState(waterObj);

  // HANDLE CHANGE MAY NOT BE NECESSARY HERE BUT KEEP IT FOR REFERENCE SEARCHBAR COMPONENT IF I HAVE TIME
  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(formData);
    setFormData(waterObj);
  };

  return (
    <Form className='water-container ' onSubmit={handleSubmit}>
      <Col sm={10}>
        <Form.Check
          type='radio'
          label='Park Drinking Fountain'
          name='formHorizontalRadios'
          id='formHorizontalRadios1'
          value={formData.type}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Public Fill Station'
          name='formHorizontalRadios'
          id='formHorizontalRadios2'
          value={formData.type}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Public Hose Bib'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.type}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Private Hose Bib'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.type}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Non-Profit Hose Bib'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.type}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Public Alt'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.type}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Non-Profit Alt'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.type}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Private Alt'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.type}
          onChange={handleChange}
        />
      </Col>
      <Col sm={10}>
        <Form.Check
          type='radio'
          label='Manhattan'
          name='formHorizontalRadios'
          id='formHorizontalRadios1'
          value={formData.borough}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Brooklyn'
          name='formHorizontalRadios'
          id='formHorizontalRadios2'
          value={formData.borough}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Bronx'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.borough}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Queens'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.borough}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Staten Island'
          name='formHorizontalRadios'
          id='formHorizontalRadios3'
          value={formData.borough}
          onChange={handleChange}
        />
      </Col>
      <Form.Group as={Row} controlId='formHorizontalEmail'>
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

      <Form.Group as={Row} controlId='formHorizontalPassword'>
        <Form.Label column sm={2}>
          Latitude:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type='number'
            placeholder='Latitude'
            name='latitude'
            value={formData.latitude}
            onChange={handleChange}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formHorizontalPassword'>
        <Form.Label column sm={2}>
          Longitude:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type='number'
            placeholder='Longitude'
            name='longitude'
            value={formData.longitude}
            onChange={handleChange}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formHorizontalPassword'>
        <Form.Label column sm={2}>
          Phone:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type='phone'
            placeholder='Phone Number'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formHorizontalPassword'>
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type='email'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formHorizontalPassword'>
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

      <Button
        className='water-container'
        type='submit'
        // disabled={
        //   // Check if any of the required fields are missing
        //   !formData.name ||
        //   !formData.latitude ||
        //   !formData.longitude ||
        //   !formData.address ||
        //   !formData.details ||
        //   // Check if borough and type are not set to 1
        //   formData.borough !== 1 ||
        //   formData.type !== 1 ||
        //   // Check if the length of the fields exceed the max length
        //   formData.name.length > 100 ||
        //   formData.address.length > 100 ||
        //   formData.details.length > 300 ||
        //   (formData.phone && formData.phone.length > 10) ||
        //   (formData.email && formData.email.length > 50)
        // }
        value='Submit'
        
      ></Button>
    </Form>
  );
};

WaterForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default WaterForm;
