import { GET_LAT_LONG_BY_CITY, RESET_LAT_LONG_BY_CITY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LAT_LONG_BY_CITY:
      return action.payload.data.results[0].geometry.location;
    case RESET_LAT_LONG_BY_CITY:
      return action.payload;
    default:
      return state;
  }
}
