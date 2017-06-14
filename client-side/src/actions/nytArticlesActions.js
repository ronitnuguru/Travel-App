import axios from 'axios';

import { FETCH_NYT_ARTICLES, RESET_NYT_RESULTS } from './types';

const NYT_API = 'f5fbfac2b9f3409cbfda1dfe884e2350';
const ROOT_URL = 'http://localhost:3090';

export const getNYTArticlesByCity = (city) => async (dispatch) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${NYT_API}&q=${city}&fq=${city}&sort=newest`;
  axios.post(`${ROOT_URL}/currentCity`, { url })
    .then(response => {
      dispatch({ type: FETCH_NYT_ARTICLES, payload: response });
    })
    .catch((error) => {
        console.error(error);
    });
}

export const resetNewsResults = () => async (dispatch) => {
  dispatch({ type: RESET_NYT_RESULTS, payload: {} });
}
