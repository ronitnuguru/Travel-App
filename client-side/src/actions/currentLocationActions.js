import axios from 'axios';

import { GET_CURRENT_CITY } from './types';

const GOOGLE_MAPS_API_KEY = `AIzaSyAIjIAAiKNXkgx0iVxW1iesHpOtQWFw-YQ`;
const ROOT_URL = 'http://localhost:3090';

export function getCurrentCity(latitude, longitude) {
  return function(dispatch) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=locality&key=${GOOGLE_MAPS_API_KEY}`;
    axios.post(`${ROOT_URL}/currentCity`, { url })
      .then(response => {
        dispatch({ type: GET_CURRENT_CITY, payload: response });
      })
      .catch((error) => {
          console.error(error);
      });
  }
}
