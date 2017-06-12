import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Loader from 'halogen/ClipLoader';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

import { getCurrentCity } from '../actions';
import CityImagesSlider from './CityImagesSlider';
import WeatherForecast from './WeatherForecast';
import NYTArticles from './NYTArticles';
import Restaurants from './Restaurants';
import Bars from './Bars';

class CurrentLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getPreciseLocation().then(
      location => this.setState({ latitude: location[0], longitude: location[1]})
    );
  }

  componentWillUpdate(nextProps, nextState){
    if (this.state !== nextState) {
      this.props.getCurrentCity(nextState.latitude, nextState.longitude);
    }
  }

  getPreciseLocation() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    });
  }

  renderCurrentLocation() {
    const { getCurrentPosition } = this.props;
    if (_.isEmpty(getCurrentPosition)) {
      return (
        <Loader className="textCenter" color="#000000" size="50px" margin="4px"/>
      );
    } else {
      return (
        <div>
          <h1 className="textCenter">{getCurrentPosition.address_components[0].long_name}</h1>
            <GoogleMapLoader
              containerElement={<div style={{ height: '200px', width: '100%' }} /> }
              googleMapElement={
                <GoogleMap
                  defaultZoom={9}
                  defaultCenter={{ lat: this.state.latitude , lng: this.state.longitude }}>
                </GoogleMap>
              }
            />
          <br />
          <WeatherForecast latitude={this.state.latitude} longitude={this.state.longitude} />
          <br />
            <div className="container">
              <div className="row">
                <Restaurants latitude={this.state.latitude} longitude={this.state.longitude} searchTerm={'restaurants'} />
                <Bars latitude={this.state.latitude} longitude={this.state.longitude} searchTerm={'bars'} />
              </div>
            </div>
          <NYTArticles city={getCurrentPosition.address_components[0].long_name} />
          <br />
          <CityImagesSlider city={getCurrentPosition.address_components[0].long_name}/>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="container">
        {this.renderCurrentLocation()}
      </div>
    );
  }
}

function mapStateToProps({ getCurrentPosition }) {
  return {
    getCurrentPosition
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCurrentCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation);
