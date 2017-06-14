import { FETCH_YELP_BARS, RESET_YELP_BARS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_YELP_BARS:
      return action.payload.data.businesses;
    case RESET_YELP_BARS:
      return action.payload;
    default:
      return state;
  }
}
