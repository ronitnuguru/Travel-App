import { CURRENT_WEATHER_FORECAST } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CURRENT_WEATHER_FORECAST:
      return action.payload.data;
    default:
      return state;
  }
}
