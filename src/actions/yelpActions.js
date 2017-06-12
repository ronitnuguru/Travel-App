import axios from 'axios';

import {
  FETCH_YELP_RESTAURANTS, FETCH_YELP_BARS, RESET_YELP_RESTAURANTS, RESET_YELP_BARS
} from './types';

const ROOT_URL = 'https://afternoon-beach-56588.herokuapp.com';

export const fetchYelpData = (latitude, longitude, searchTerm) => async (dispatch) => {
  const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${latitude}&longitude=${longitude}`;
  /*

  try {
    let data = await axios.get(url, {
      headers: {
        'Authorization': 'Bearer Dl80WOInvo0skyX6md8RcMEen-R4LupkPmmuuR2y_yyQD5qC4Fh2SF-BZzOVjL4j_cYV9a5anXDjOQbAaJlBtoBy1isSkd7Pgqth2zPGVGZhVpNOAA0C9o2lgzcrWXYx',
        'Access-Control-Allow-Origin': '*'
     }
    });
    console.log(data);
    //dispatch({ type: FETCH_YELP_DATA, payload: data });
  } catch (e) {
    console.error(e);
  }
  */
  axios.post(`${ROOT_URL}/yelp`, { url })
    .then(response => {
      if(searchTerm === 'restaurants') {
        dispatch({ type: FETCH_YELP_RESTAURANTS, payload: response });
      }
      else if (searchTerm === 'bars') {
        dispatch({ type: FETCH_YELP_BARS, payload: response });
      }

    })
    .catch((error) => {
        console.error(error);
    });
};

export const resetYelpData = () => async (dispatch) => {
  dispatch({ type: RESET_YELP_RESTAURANTS, payload: {} });
  dispatch({ type: RESET_YELP_BARS, payload: {} });
}
