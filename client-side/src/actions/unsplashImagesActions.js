import axios from 'axios';

import { GET_UNSPLASH_IMAGE } from './types';

export const getUnsplashImage = (imageTerm) => async (dispatch) => {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${imageTerm}&per_page=1`;
  try {
    const request = await axios.get(url, {
      headers: {
        "Authorization": 'Bearer 10e899a52f88f63e783fe218af3045411d339c3b123fb002150c9b534bd929b1'
      }
    });
    console.log(request);
    dispatch({ type: GET_UNSPLASH_IMAGE, payload: request });
  } catch(e) {
    console.error(e);
  }
}

export const getRandomUnsplashImage = () => async (dispatch) => {
  const url = `https://api.unsplash.com/photos/random`;
  try {
    const request = await axios.get(url, {
      headers: {
        "Authorization": 'Bearer 10e899a52f88f63e783fe218af3045411d339c3b123fb002150c9b534bd929b1'
      }
    });
    dispatch({ type: GET_UNSPLASH_IMAGE, payload: request });
  } catch(e) {
    console.error(e);
  }
}
