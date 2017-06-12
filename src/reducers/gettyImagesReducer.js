import { IMAGE_SEARCH, RESET_IMAGE_SEARCH } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case IMAGE_SEARCH:
      //console.log(action.payload.data);
      return action.payload.data.images;
    case RESET_IMAGE_SEARCH:
      return {};
    default:
      return state;
  }
}
