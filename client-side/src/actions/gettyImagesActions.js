import axios from 'axios';

import { IMAGE_SEARCH, RESET_IMAGE_SEARCH } from './types';

const GETTY_API = `vzymqj2fj5e5hww3nakjpxzv`;
const ROOT_URL = 'http://localhost:3090';

export const getImages = (city) => async (dispatch) => {
  const url = `https://api.gettyimages.com/v3/search/images?phrase=${city}`;

  axios.post(`${ROOT_URL}/gettyImages`, { url })
    .then(response => {
      dispatch({ type: IMAGE_SEARCH, payload: response });
    })
    .catch((error) => {
        console.error(error);
    });
}

export function resetImageSearch() {
  return function (dispatch) {
    dispatch({ type: RESET_IMAGE_SEARCH, payload: {} });
  }
}
