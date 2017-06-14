import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { loadFeaturedDestinations, resetLatLongByCity, resetImageSearch, resetAllWeatherForecast, resetNewsResults, resetYelpData } from '../actions';

class FeaturedDestinations extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.loadFeaturedDestinations();
    this.props.resetLatLongByCity();
    this.props.resetImageSearch();
    this.props.resetAllWeatherForecast();
    this.props.resetNewsResults();
  }

  renderFeaturedDestinations(location) {
    return (
      <div key={location.city}>
        <Link to={`/featured-destination/${location.city}`}>
          <img src={location.img} id={location.city} className="destination-images" />
        </Link>
        <p>{location.city}</p>
      </div>
    )
  }

  render() {
    const { featuredDestinations } = this.props;
    return (
      <div className="container">
        <h3 className="mainSubHeading">Featured Destinations</h3>
        <div className="horizontal-scroll">
          <div>
            {featuredDestinations.map(location => this.renderFeaturedDestinations(location))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ featuredDestinations }) {
  return {
    featuredDestinations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadFeaturedDestinations, resetLatLongByCity, resetImageSearch, resetAllWeatherForecast, resetNewsResults, resetYelpData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedDestinations)
