import axios from 'axios';

import { GET_LAT_LONG_BY_CITY } from './types';

const GOOGLE_MAPS_API_KEY = `AIzaSyAIjIAAiKNXkgx0iVxW1iesHpOtQWFw-YQ`;
//const ROOT_URL = 'http://localhost:3090';
const ROOT_URL = 'https://shielded-mountain-82081.herokuapp.com';

export function getLatLongByCity(location) {
  return function(dispatch) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_MAPS_API_KEY}`;
    axios.post(`${ROOT_URL}/latLong`, { url })
      .then(response => {
        dispatch({ type: GET_LAT_LONG_BY_CITY, payload: response });
      })
      .catch((error) => {
          console.error(error);
      });

  }
}
