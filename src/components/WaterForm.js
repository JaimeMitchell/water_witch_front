import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const waterObj = {
  name: '',
  latitude: 0.0,
  longitude: 0.0,
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
    <div className='water-container '>
      <h2 className='water-container '>Add New Location</h2>

      <form className='water-container ' onSubmit={handleSubmit}>
        {/* NAME INPUT */}
        <div>
          <label className='water-container ' htmlFor='name'>
            Name:{' '}
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name of Water Asset'
          ></input>
        </div>
        {/* ADDRESS INPUT */}
        <div>
          <label htmlFor='adress'>Adress: </label>
          <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            placeholder='ex: 40 St. Marks Pl, New York, NY 10003'
          ></input>
        </div>

        <div>
          <input
            className='water-container '
            type='submit'
            disabled={
              //MIN DISABLE
              formData.name.length === 0 ||
              formData.address.length === 0 ||
              formData.details.length === 0 ||
              //MAY HAVE TO PUT THESE IN THE ACTUAL SELECT DIV FOR EACH
              formData.borough.length !== 1 ||
              formData.type.length !== 1 ||
              //MAX DISABLE
              formData.name.length > 100 ||
              formData.address.length > 100 ||
              formData.details.length > 300 ||
              formData.phone.length > 10 ||
              formData.email.length > 50
            }
            value='Submit'
          ></input>
        </div>
      </form>
    </div>
  );
};

WaterForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default WaterForm;
