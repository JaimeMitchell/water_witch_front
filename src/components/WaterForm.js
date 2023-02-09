import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const waterObj = {
  latitude: '',
  longitude: '',
  address: '',
  name: '',
  details: '',
  borough: '',
  type: '',
  phone: '',
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
      fieldValue = parseInt(fieldValue);
    }
    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  //HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(formData);
    setFormData(waterObj);
  };

  return (
    <form className='water-container' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='latitude'>Latitude:</label>
        <input
          type='number'
          name='latitude'
          id='latitude'
          value={formData.latitude}
          placeholder='Latitude'
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='longitude'>Longitude:</label>
        <input
          type='number'
          name='longitude'
          id='longitude'
          value={formData.longitude}
          placeholder='longitude'
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Type:</label>

        <input
          type='radio'
          label='Public'
          name='type'
          id='Public'
          value='Public'
          checked={formData.type === 'Public'}
          onChange={handleChange}
        />
        <label htmlFor='Public'>Public</label>

        <input
          type='radio'
          label='Non-Profit'
          name='type'
          id='Non-Profit'
          value='Non-Profit'
          checked={formData.type === 'Non-Profit'}
          onChange={handleChange}
        />
        <label htmlFor='Non-Profit'>Non-Profit</label>

        <input
          type='radio'
          label='Private'
          name='type'
          id='Private'
          value='Private'
          checked={formData.type === 'Private'}
          onChange={handleChange}
        />
        <label htmlFor='Private'>Private</label>

        <input
          type='radio'
          label='Bottle/Gallon'
          name='type'
          id='Bottle/Gallon'
          value='Bottle/Gallon'
          checked={formData.type === 'Bottle/Gallon'}
          onChange={handleChange}
        />
        <label htmlFor='Bottle/Gallon'>Bottle/Gallon</label>

        <input
          type='radio'
          label='Park Drinking Fountain'
          name='type'
          id='Park Drinking Fountain'
          value='Park Drinking Fountain'
          checked={formData.type === 'Park Drinking Fountain'}
          onChange={handleChange}
        />
        <label htmlFor='Park Drinking Fountain'>Park Drinking Fountain</label>
      </div>

      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          placeholder='Location Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='address'>Address:</label>
        <input
          type='text'
          id='address'
          placeholder='Address'
          name='address'
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type='radio'
          id='Manhattan'
          name='borough'
          value='Manhattan'
          checked={formData.borough === 'Manhattan'}
          onChange={handleChange}
        />
        <label htmlFor='Manhattan'>Manhattan</label>

        <input
          type='radio'
          id='Brooklyn'
          name='borough'
          value='Brooklyn'
          checked={formData.borough === 'Brooklyn'}
          onChange={handleChange}
        />
        <label htmlFor='Brooklyn'>Brooklyn</label>

        <input
          type='radio'
          id='Bronx'
          name='borough'
          value='Bronx'
          checked={formData.borough === 'Bronx'}
          onChange={handleChange}
        />
        <label htmlFor='Bronx'>Bronx</label>

        <input
          type='radio'
          id='Queens'
          name='borough'
          value='Queens'
          checked={formData.borough === 'Queens'}
          onChange={handleChange}
        />
        <label htmlFor='Queens'>Queens</label>

        <input
          type='radio'
          id='Staten Island'
          name='borough'
          value='Staten Island'
          checked={formData.borough === 'Staten Island'}
          onChange={handleChange}
        />
        <label htmlFor='Staten Island'>Staten Island</label>
      </div>

      <div>
        <label htmlFor='phone'>Phone:</label>
        <input
          type='text'
          id='phone'
          placeholder='Phone Number'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='details'>Details:</label>
        <input
          type='text'
          id='details'
          placeholder='Additional Details'
          name='details'
          value={formData.details}
          onChange={handleChange}
        />
      </div>
      <input className='water-container' type='submit' value='Submit' />
    </form>
  );
};

WaterForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default WaterForm;
