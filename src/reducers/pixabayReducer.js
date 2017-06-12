import { GET_PIXABAY_IMAGE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_PIXABAY_IMAGE:
      const randomNumber = Math.floor((Math.random() * 3) + 1);
      return action.payload.data.hits[randomNumber-1];
    default:
      return state;
  }
}
