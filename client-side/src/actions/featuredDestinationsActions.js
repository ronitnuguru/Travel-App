import axios from 'axios';

import { LOAD_FEATURED_DESTINATIONS, GET_LAT_LONG_BY_CITY, RESET_LAT_LONG_BY_CITY, GET_CURRENT_CITY } from './types';
import featuredDestinationsApi from '../api/mockFeaturedDestinations';

const GOOGLE_MAPS_API_KEY = `AIzaSyAIjIAAiKNXkgx0iVxW1iesHpOtQWFw-YQ`;

export function loadFeaturedDestinations() {
  return function(dispatch) {
    return featuredDestinationsApi.getAllFeaturedDestinations().then(data => {
      dispatch({ type: LOAD_FEATURED_DESTINATIONS, payload: data });
    });
  }
}

export function resetLatLongByCity() {
  return function (dispatch) {
    dispatch({ type: RESET_LAT_LONG_BY_CITY, payload: {} });
  }
}
