import { WEATHER_FORECAST_SEARCH, RESET_WEATHER_FORECAST, RESET_CURRENT_WEATHER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case WEATHER_FORECAST_SEARCH:
      return action.payload.data;
    case RESET_WEATHER_FORECAST:
     return action.payload;
    case RESET_CURRENT_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
