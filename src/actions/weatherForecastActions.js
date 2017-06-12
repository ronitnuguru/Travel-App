import axios from 'axios';

import { WEATHER_FORECAST_SEARCH, CURRENT_WEATHER_FORECAST, RESET_CURRENT_WEATHER, RESET_WEATHER_FORECAST } from './types';

const WEATHER_API_KEY='71031b52ee2e59b6b5a0a6c726465ef9';

export const getWeatherForecast = (latitude, longitude) => async (dispatch) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}`;
  try {
    let request = await axios.get(url);
    dispatch({ type: WEATHER_FORECAST_SEARCH, payload: request });
  } catch(e) {
    console.error(e);

  }
}

export const getCurrentWeatherForecast = (latitude, longitude) => async (dispatch) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}`;
  try {
    let request = await axios.get(url);
    dispatch({ type: CURRENT_WEATHER_FORECAST, payload: request });
  } catch(e) {
    console.error(e);
  }
}

export const searchedWeather = (location) => async (dispatch) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&q=${location}`;
  try {
    const request = await axios.get(url);
    dispatch({ type: WEATHER_FORECAST_SEARCH, payload: request });
  } catch(e){
    dispatch({ type: INCORRECT_REQUEST, payload: 'BAD_DATA' });
  }

}

export const resetAllWeatherForecast = () => async (dispatch) => {
  dispatch({ type: RESET_CURRENT_WEATHER, payload: {} });
  dispatch({ type: RESET_WEATHER_FORECAST, payload: {} });
}
