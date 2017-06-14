import { FETCH_ESPN_HEADLINES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ESPN_HEADLINES:
      return action.payload.data;
    default:
      return state;
  }
}
