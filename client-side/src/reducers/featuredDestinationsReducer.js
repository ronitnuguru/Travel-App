import { LOAD_FEATURED_DESTINATIONS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_FEATURED_DESTINATIONS:
      return action.payload;
    default:
      return state;
  }
}
