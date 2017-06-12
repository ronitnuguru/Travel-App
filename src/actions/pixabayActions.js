import axios from 'axios';

import { GET_PIXABAY_IMAGE } from './types';

const PIXABAY_API_KEY = '5596072-66a9ce66898217ffc97f8f6b0';

export const getPixabayImage = (imageTerm) => async (dispatch) => {
  const url = `https://pixabay.com/api?key=${PIXABAY_API_KEY}&q=${imageTerm}&per_page=10`;
  try {
    const request = await axios.get(url);
    dispatch({ type: GET_PIXABAY_IMAGE, payload: request });
  } catch(e) {
    console.error(e);
  }
}
