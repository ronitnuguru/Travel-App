import axios from 'axios';

import { GET_LAT_LONG_BY_CITY } from './types';

const GOOGLE_MAPS_API_KEY = `AIzaSyAIjIAAiKNXkgx0iVxW1iesHpOtQWFw-YQ`;

export function getLatLongByCity(location) {
  return function(dispatch) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_MAPS_API_KEY}`;
    const request = axios.get(url);
    dispatch({ type: GET_LAT_LONG_BY_CITY, payload: request });
  }
}
