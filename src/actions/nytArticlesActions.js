import axios from 'axios';

import { FETCH_NYT_ARTICLES, RESET_NYT_RESULTS } from './types';

const NYT_API = 'f5fbfac2b9f3409cbfda1dfe884e2350';

export const getNYTArticlesByCity = (city) => async (dispatch) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${NYT_API}&q=${city}&fq=${city}&sort=newest`;
  try {
    let request = await axios.get(url);
    dispatch({ type: FETCH_NYT_ARTICLES, payload: request });
  } catch(e) {
    console.error(e);
  }
}

export const resetNewsResults = () => async (dispatch) => {
  dispatch({ type: RESET_NYT_RESULTS, payload: {} });
}
