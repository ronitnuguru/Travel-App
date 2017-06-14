import { FETCH_YELP_RESTAURANTS, RESET_YELP_RESTAURANTS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_YELP_RESTAURANTS:
      return action.payload.data.businesses;
    case RESET_YELP_RESTAURANTS:
      return {};
    default:
      return state;
  }
}
