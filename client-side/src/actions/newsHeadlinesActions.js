import axios from 'axios';

import { FETCH_CNN_HEADLINES, FETCH_NATIONAL_GEOGRAPHIC_HEADLINES, FETCH_ESPN_HEADLINES } from './types';

const NEWS_API_KEY = 'ac79e587a306401ea2886a75a2e4ee60';
//const ROOT_URL = 'http://localhost:3090';
const ROOT_URL = 'https://shielded-mountain-82081.herokuapp.com';

export const getNewsHeadlines = (newsType) => (dispatch) => {
  const url = `https://newsapi.org/v1/articles?source=${newsType}&sortBy=top&apiKey=${NEWS_API_KEY}`;
  axios.post(`${ROOT_URL}/news`, { url })
    .then(response => {
      if(newsType === 'cnn') {
        dispatch({ type: FETCH_CNN_HEADLINES, payload: response });
      }
      else if(newsType === 'national-geographic') {
        dispatch({ type: FETCH_NATIONAL_GEOGRAPHIC_HEADLINES, payload: response });
      }
      else if (newsType === 'espn') {
        dispatch({ type: FETCH_ESPN_HEADLINES, payload: response });
      }
    })
    .catch((error) => {
        console.error(error);
    });
};
