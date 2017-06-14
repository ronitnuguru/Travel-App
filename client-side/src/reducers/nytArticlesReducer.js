import { FETCH_NYT_ARTICLES, RESET_NYT_RESULTS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_NYT_ARTICLES:
      return action.payload.data.response.docs;
    case RESET_NYT_RESULTS:
     return action.payload;
    default:
      return state;
  }
}
