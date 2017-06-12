import axios from 'axios';

import { IMAGE_SEARCH, RESET_IMAGE_SEARCH } from './types';

const GETTY_API = `vzymqj2fj5e5hww3nakjpxzv`;

export const getImages = (city) => async (dispatch) => {
  const url = `https://api.gettyimages.com/v3/search/images?phrase=${city}`;
  try {
    let request = await axios.get(url, {
      headers: { "Api-Key": GETTY_API }
    });
    dispatch({ type: IMAGE_SEARCH, payload: request });
  } catch (e) {
    console.error(e);
  }
}

export function resetImageSearch() {
  return function (dispatch) {
    dispatch({ type: RESET_IMAGE_SEARCH, payload: {} });
  }
}
