import axios from 'axios';

import { ADD_TO_FAVORITE_RESTAURANTS, ADD_TO_FAVORITE_BARS } from './types';

export const addToRestaurantsFavoritesList = (data) => (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITE_RESTAURANTS, payload: data });
}

export const addToBarsFavoritesList = (data) => (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITE_BARS, payload: data });
}
