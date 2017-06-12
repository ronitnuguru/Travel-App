import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import Pagination from './Pagination';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: {}
    };
  }

  componentDidMount() {
    const {latitude, longitude} = this.props;
    this.props.fetchYelpData(latitude, longitude, this.props.searchTerm);
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  renderYelpRestaurants(){
    const { yelpRestaurants } = this.props;
    if(_.isEmpty(yelpRestaurants) || yelpRestaurants.length === 0){
      return;
    }
    else {
      return (
          <div>
            <h4 className="mainSubHeading">Restaurants</h4>
            <Pagination data={yelpRestaurants} />
          </div>
      );
    }
  }
  render() {
    return(
      <div className="col">
        {this.renderYelpRestaurants()}
      </div>
    );
  }
}

function mapStateToProps({ yelpRestaurants }) {
  return {
    yelpRestaurants
  };
}

export default connect(mapStateToProps, actions)(Restaurants);
