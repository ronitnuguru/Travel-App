import { FETCH_NATIONAL_GEOGRAPHIC_HEADLINES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_NATIONAL_GEOGRAPHIC_HEADLINES:
      return action.payload.data;
    default:
      return state;
  }
}
