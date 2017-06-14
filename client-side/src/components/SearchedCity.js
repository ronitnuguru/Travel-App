import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

import * as actions from '../actions';
import CityImagesSlider from './CityImagesSlider';
import WeatherForecast from './WeatherForecast';
import NYTArticles from './NYTArticles';
import Restaurants from './Restaurants';
import Bars from './Bars';

class SearchedCity extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.searchedWeather(this.props.match.params.city);
    this.props.getLatLongByCity(this.props.match.params.city);
  }

  renderData() {
    if(_.isEmpty(this.props.weatherForecast)) {
      return<div></div>;
    } else {
      const { weatherForecast } = this.props;
      return (
        <div>
          <h1 className="cityHeading textCenter">{weatherForecast.city.name}</h1>
          <GoogleMapLoader
            containerElement={<div style={{ height: '200px', width: '100%' }} /> }
            googleMapElement={
              <GoogleMap
                defaultZoom={9}
                defaultCenter={{ lat: weatherForecast.city.coord.lat , lng: weatherForecast.city.coord.lon }}>
              </GoogleMap>
            }
          />
          <WeatherForecast latitude={weatherForecast.city.coord.lat} longitude={weatherForecast.city.coord.lon} />
          <br />
          <div className="container">
            <div className="row">
              <Restaurants latitude={weatherForecast.city.coord.lat} longitude={weatherForecast.city.coord.lon} searchTerm={'restaurants'} />
              <Bars latitude={weatherForecast.city.coord.lat} longitude={weatherForecast.city.coord.lon} searchTerm={'bars'} />
            </div>
          </div>
          <br />
          <NYTArticles city={this.props.match.params.city} />
          <br />
          <CityImagesSlider city={this.props.match.params.city}/>
          <br />
        </div>

      );
    }
  }

  render() {
    return(
      <div className="container">
        {this.renderData()}
      </div>
    );
  }
}

function mapStateToProps({weatherForecast}) {
  return {
    weatherForecast
  };
}

export default connect(mapStateToProps, actions)(SearchedCity);
