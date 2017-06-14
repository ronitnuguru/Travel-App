import { ADD_TO_FAVORITE_RESTAURANTS } from '../actions/types';
import _ from 'lodash';

export default function(state=[], action) {
  switch(action.type) {
    case ADD_TO_FAVORITE_RESTAURANTS:
    return _.uniq([
      action.payload, ...state
    ], 'id');
    default:
      return state;
  }
}
