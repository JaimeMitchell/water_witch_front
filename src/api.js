import axios from 'axios';

export const URL=process.env.REACT_APP_BACKEND_URL

//POST FOR FORM


export const addFountainApi = marker => {
  return (
    axios.post(`${process.env.REACT_APP_BACKEND_URL}`, marker)
    .then(response =>response.data)
    .catch(err => console.log(err))
  );
};


// const addFountain = (fountain) => {
//   return (
//     axios
//       .post(`${process.env.REACT_APP_BACKEND_URL}/fountains`, fountain)
//       .then((response) => fountainApiToJson(response.data.fountain))
//       .catch((err) => console.log(err))
//   );
// };

// export const addCardAPI = (card, boardId) => {
  //   return axios
  //     .post(`${REACT_APP_BACKEND_URL}/boards/${boardId}/cards`, card)
  //     .then((response) => {
  //
  //       return response.data.cards.map((card)=>{
  //         return cardApiToJson(cards)
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
//  syntax alternative to send data into the body
  // method post
  // only the value is sent, not the key
  // data: 'Country=Brasil&City=Belo Horizonte',
  
//GET FOR NYC DRINKING FOUNTAIN MARKERS

export const getWaterApi = id => {
  return(
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/fountains`)
    .then(response => response.data)
    .catch(err => console.log(err)))
}

