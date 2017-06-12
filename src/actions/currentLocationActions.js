import axios from 'axios';

import { GET_CURRENT_CITY } from './types';

const GOOGLE_MAPS_API_KEY = `AIzaSyAIjIAAiKNXkgx0iVxW1iesHpOtQWFw-YQ`;

export function getCurrentCity(latitude, longitude) {
  return function(dispatch) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=locality&key=${GOOGLE_MAPS_API_KEY}`;
    const request = axios.get(url);
    dispatch({ type: GET_CURRENT_CITY, payload: request });
  }
}
