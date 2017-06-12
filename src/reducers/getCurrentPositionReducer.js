import { GET_CURRENT_CITY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_CITY:
      return action.payload.data.results[0];
    default:
      return state;
  }
}
