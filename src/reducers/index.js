import { combineReducers } from 'redux';

import featuredDestinations from './featuredDestinationsReducer';
import featuredDestinationLatLong from './featuredDestinationLatLongReducer';
import getCurrentPosition from './getCurrentPositionReducer';
import gettyImages from './gettyImagesReducer';
import weatherForecast from './weatherForecastReducer';
import currentWeatherForecast from './getCurrentWeatherForecast';
import nytArticles from './nytArticlesReducer';
import unsplashImage from './unsplashImageReducer';
import pixabayImage from './pixabayReducer';
import yelpRestaurants  from './yelpRestaurantReducer';
import yelpBars  from './yelpBarsReducer';

const rootReducer = combineReducers({
  featuredDestinations,
  featuredDestinationLatLong,
  getCurrentPosition,
  gettyImages,
  weatherForecast,
  currentWeatherForecast,
  nytArticles,
  unsplashImage,
  pixabayImage,
  yelpRestaurants,
  yelpBars

});

export default rootReducer;
