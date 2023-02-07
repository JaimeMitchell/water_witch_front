import { useState } from 'react';
import axios from 'axios';

const AddWaterForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    details: '',
    borough: '',
    type: '',
    phone: '',
    email: '',
  });

  // REMEMBER TO SWITCH TO THIS AT DEPLOYMENT https://herokuapp.com/waterwitch
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}`, formData, {})
      .then((res) => props.setFormData([...props.fountains, res.data]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='form-label' htmlFor='title'>
        Name
      </label>
      <input
        className='form-control'
        type='text'
        id='title'
        name='title'
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />

      <div className='mb-3'>
        <label className='form-label' htmlFor='blog'>
          Blog
        </label>
        <textarea
          className='form-control'
          type='text'
          id='content'
          name='content'
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
      </div>

      <input type='submit' className='btn btn-success' />
    </form>
  );
};

export default AddWaterForm;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './BoardForm.css';

// const boardObj = {
//   title: '',
//   owner: '',
// };

// const BoardForm = (props) => {

//   const [formData, setFormData] = useState(boardObj);

//   const handleChange = (event) => {
//     const fieldValue = event.target.value;
//     const fieldName = event.target.name;
//     const newFormData = { ...formData, [fieldName]: fieldValue };
//     setFormData(newFormData);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.handleBoardSubmit(formData);
//     setFormData(boardObj);
//   };
//   return (
//     <div className='board-card-container '>
//         <h2 className='board-card-container '>Board Form</h2>
//       <form className='board-card-container ' onSubmit={handleSubmit}>

//         <div>
//           <label className='board-card-container '  htmlFor='title'>Title: </label>
//           <input
//             type='text'
//             id='title'
//             name='title'
//             value={formData.title}
//             onChange={handleChange}
//             placeholder='Write a board title'
//           ></input>
//         </div>
//         <div>
//           <label htmlFor='owner'>Owner: </label>
//           <input
//             type='text'
//             id='owner'
//             name='owner'
//             value={formData.owner}
//             onChange={handleChange}
//             placeholder='Write your handle'
//           ></input>
//         </div>
//         <div>
//           <input className='board-card-container ' type='submit'
//           disabled={((formData.title.length === 0) || (formData.owner.length === 0) || (formData.title.length > 40) || (formData.owner.length > 40))}
//           value='Submit'></input>
//         </div>
//       </form>
//     </div>
//   );
// };

// BoardForm.propTypes = {
//   handleBoardSubmit: PropTypes.func.isRequired,
// };

// export default BoardForm;
