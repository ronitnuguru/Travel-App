import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

import * as actions from '../actions';

class SearchLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationTerm: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      locationTerm: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/location/${this.state.locationTerm}`);

    this.setState({
      locationTerm: ''
    });
  }

  render() {
    return (
      <div className="search-bar">
        <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Search Location"
          className="form-control"
          value={this.state.locationTerm}
          onChange={this.onInputChange}
          />
          <span className="input-group-btn">
              <button type="submit button" className="btn btn-secondary">
                Submit
              </button>
          </span>
        </form>
      </div>
    );
  }
}

const ShowTheLocationWithRouter = withRouter(SearchLocation)
export default withRouter(SearchLocation);
