import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

import { getLatLongByCity } from '../actions';
import CityImagesSlider from './CityImagesSlider';
import WeatherForecast from './WeatherForecast';
import NYTArticles from './NYTArticles';
import Restaurants from './Restaurants';
import Bars from './Bars';

class FeaturedCity extends Component {
  constructor (props){
    super(props);
  }
  componentDidMount() {
    this.props.getLatLongByCity(this.props.match.params.city);
  }
  renderMap() {
      if (this.props.featuredDestinationLatLong.lat === undefined) {
        return <div></div>;

      } else {
        const { featuredDestinationLatLong } = this.props;
        return (
          <div>
            <GoogleMapLoader
              containerElement={<div style={{ height: '200px', width: '100%' }} /> }
              googleMapElement={
                <GoogleMap
                  defaultZoom={9}
                  defaultCenter={{ lat: featuredDestinationLatLong.lat , lng: featuredDestinationLatLong.lng }}>
                </GoogleMap>
              }
            />
            <WeatherForecast latitude={featuredDestinationLatLong.lat} longitude={featuredDestinationLatLong.lng} />
            <br />
            <div className="container">
              <div className="row">
                <Restaurants latitude={featuredDestinationLatLong.lat} longitude={featuredDestinationLatLong.lng} searchTerm={'restaurants'} />
                <Bars latitude={featuredDestinationLatLong.lat} longitude={featuredDestinationLatLong.lng} searchTerm={'bars'} />
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
    const {featuredDestinationLatLong} = this.props;
    return (
      <div className="container">
        <h1 className="cityHeading textCenter">{this.props.match.params.city}</h1>
        {this.renderMap()}
        <br />
      </div>
    );
  }
}

function mapStateToProps({ featuredDestinationLatLong }) {
  return {
    featuredDestinationLatLong
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLatLongByCity }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(FeaturedCity);
