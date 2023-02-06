import axios from 'axios';

export const URL=process.env.REACT_APP_BACKEND_URL

//POST FOR FORM

export const addMarkerDb = marker => {
  return (
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/doused`, marker)
    .then(response =>response.data)
    .catch(err => console.log(err))
  );
};

// Send a POST request
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });
 // syntax alternative to send data into the body
  // method post
  // only the value is sent, not the key
  // data: 'Country=Brasil&City=Belo Horizonte',
  
//GET FOR NYC DRINKING FOUNTAIN MARKERS

export const getMarkerDb = id => {
  return(
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/fountains`)
    .then(response => response.data)
    .catch(err => console.log(err)))
}

