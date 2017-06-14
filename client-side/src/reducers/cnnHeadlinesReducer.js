import { FETCH_CNN_HEADLINES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CNN_HEADLINES:
      return action.payload.data;
    default:
      return state;
  }
}
