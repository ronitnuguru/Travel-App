import { GET_UNSPLASH_IMAGE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_UNSPLASH_IMAGE:
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
