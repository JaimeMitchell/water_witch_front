import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const fountainObj = {
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
  const [formData, setFormData] = useState(fountainObj);

  const handleChange = (event) => {
    let fieldValue = event.target.value;
    const fieldName = event.target.name;

    if (fieldName === 'latitude' || fieldName === 'longitude') {
      fieldValue = parseFloat(fieldValue);
    }

    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  //HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(formData);
    setFormData(fountainObj);
  };

  return (
    <div>
      <h4>Add Water Location</h4>
      <form className='water-container' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='latitude'>Latitude:</label>
          <input
            type='text'
            name='latitude'
            id='latitude'
            value={formData.latitude}
            placeholder='Latitude Required'
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='longitude'>Longitude:</label>
          <input
            type='text'
            name='longitude'
            id='longitude'
            value={formData.longitude}
            placeholder='Longitude Required'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            placeholder='Location Name Required'
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
            placeholder='Required'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor='details'>Details:</label>
          <input
            type='text'
            id='details'
            placeholder='Required'
            name='details'
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type Required:</label>
          <div>
            <input
              type='radio'
              label='Public Fill Station'
              name='type'
              id='Public Fill Station'
              value='Public Fill Station'
              checked={formData.type === 'Public Fill Station'}
              onChange={handleChange}
              required
            />
            <label htmlFor='Public Fill Station'>Public Fill Staton</label>

            <input
              type='radio'
              label='Non-Profit Fill Station'
              name='type'
              id='Non-Profit Fill Station'
              value='Non-Profit Fill Station'
              checked={formData.type === 'Non-Profit Fill Station'}
              onChange={handleChange}
              required
            />
            <label htmlFor='Non-Profit Fill Station'>
              Non-Profit Fill Station
            </label>
            <input
              type='radio'
              label='Private Fill Station'
              name='type'
              id='Private Fill Station'
              value='Private Fill Station'
              checked={formData.type === 'Private Fill Station'}
              onChange={handleChange}
              required
            />
            <label htmlFor='Private Fill Station'>Private Fill Station</label>
          </div>
          <div>
            <input
              type='radio'
              label='Public Hose Bibb'
              name='type'
              id='Public Hose Bibb'
              value='Public Hose Bibb'
              checked={formData.type === 'Public Hose Bibb'}
              onChange={handleChange}
              required
            />
            <label htmlFor='Public Hose Bibb'>Public Hose Bibb</label>

            <input
              type='radio'
              label='Non-Profit Hose Bibb'
              name='type'
              id='Non-Profit Hose Bibb'
              value='Non-Profit Hose Bibb'
              checked={formData.type === 'Non-Profit Hose Bibb'}
              onChange={handleChange}
              required
            />
            <label htmlFor='Non-Profit Hose Bibb'>Non-Profit Hose Bibb</label>

            <input
              type='radio'
              label='Private Hose Bibb'
              name='type'
              id='Private Hose Bibb'
              value='Private Hose Bibb'
              checked={formData.type === 'Private Hose Bibb'}
              onChange={handleChange}
              required
            />
            <label htmlFor='Private Hose Bibb'>Private Hose Bibb</label>
          </div>
          <div>
            <input
              type='radio'
              label='Bottle'
              name='type'
              id='Bottle'
              value='Bottle'
              checked={formData.type === 'Bottle'}
              onChange={handleChange}
              required
            />
            <label htmlFor='Bottle'>Bottle</label>

            <input
              type='radio'
              label='Park Drinking Fountain'
              name='type'
              id='Park Drinking Fountain'
              value='Park Drinking Fountain'
              checked={formData.type === 'Park Drinking Fountain'}
              onChange={handleChange}
              required
            />
            <label htmlFor='Park Drinking Fountain'>
              Park Drinking Fountain
            </label>
          </div>{' '}
        </div>

        <div>
          <label>Borough Required:</label>
          <input
            type='radio'
            id='Manhattan'
            name='borough'
            value='Manhattan'
            checked={formData.borough === 'Manhattan'}
            onChange={handleChange}
            required
          />
          <label htmlFor='Manhattan'>Manhattan</label>

          <input
            type='radio'
            id='Brooklyn'
            name='borough'
            value='Brooklyn'
            checked={formData.borough === 'Brooklyn'}
            onChange={handleChange}
            required
          />
          <label htmlFor='Brooklyn'>Brooklyn</label>

          <input
            type='radio'
            id='Bronx'
            name='borough'
            value='Bronx'
            checked={formData.borough === 'Bronx'}
            onChange={handleChange}
            required
          />
          <label htmlFor='Bronx'>Bronx</label>

          <input
            type='radio'
            id='Queens'
            name='borough'
            value='Queens'
            checked={formData.borough === 'Queens'}
            onChange={handleChange}
            required
          />
          <label htmlFor='Queens'>Queens</label>

          <input
            type='radio'
            id='Staten Island'
            name='borough'
            value='Staten Island'
            checked={formData.borough === 'Staten Island'}
            onChange={handleChange}
            required
          />
          <label htmlFor='Staten Island'>Staten Island</label>
        </div>

        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='text'
            id='phone'
            placeholder='Phone NOT Required'
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
            placeholder='Email NOT Required'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <input className='water-container' type='submit' value='Submit' />
      </form>
    </div>
  );
};

WaterForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default WaterForm;
