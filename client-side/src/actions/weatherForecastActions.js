import axios from 'axios';

import { WEATHER_FORECAST_SEARCH, CURRENT_WEATHER_FORECAST, RESET_CURRENT_WEATHER, RESET_WEATHER_FORECAST } from './types';

const WEATHER_API_KEY='71031b52ee2e59b6b5a0a6c726465ef9';
const ROOT_URL = 'http://localhost:3090';

export const getWeatherForecast = (latitude, longitude) => async (dispatch) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}`;
  axios.post(`${ROOT_URL}/weatherForecast`, { url })
    .then(response => {
      dispatch({ type: WEATHER_FORECAST_SEARCH, payload: response });
    })
    .catch((error) => {
        console.error(error);
    });
}

export const getCurrentWeatherForecast = (latitude, longitude) => async (dispatch) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}`;
  axios.post(`${ROOT_URL}/currentWeatherForecast`, { url })
    .then(response => {
      dispatch({ type: CURRENT_WEATHER_FORECAST, payload: response });
    })
    .catch((error) => {
        console.error(error);
    });
}

export const searchedWeather = (location) => async (dispatch) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&q=${location}`;
  axios.post(`${ROOT_URL}/searchedWeather`, { url })
    .then(response => {
      dispatch({ type: WEATHER_FORECAST_SEARCH, payload: response });
    })
    .catch((error) => {
      console.error(error);
    });

}

export const resetAllWeatherForecast = () => async (dispatch) => {
  dispatch({ type: RESET_CURRENT_WEATHER, payload: {} });
  dispatch({ type: RESET_WEATHER_FORECAST, payload: {} });
}
