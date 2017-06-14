import axios from 'axios';

import {
  FETCH_YELP_RESTAURANTS, FETCH_YELP_BARS, RESET_YELP_RESTAURANTS, RESET_YELP_BARS
} from './types';

//const ROOT_URL = 'https://afternoon-beach-56588.herokuapp.com';
const ROOT_URL = 'http://localhost:3090';

export const fetchYelpData = (latitude, longitude, searchTerm) => async (dispatch) => {
  const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${latitude}&longitude=${longitude}`;
  axios.post(`${ROOT_URL}/yelp`, { url })
    .then(response => {
      if(searchTerm === 'restaurants') {
        dispatch({ type: FETCH_YELP_RESTAURANTS, payload: response });
      }
      else if (searchTerm === 'bars') {
        dispatch({ type: FETCH_YELP_BARS, payload: response });
      }
    })
    .catch((error) => {
        console.error(error);
    });
};
