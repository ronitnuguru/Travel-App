import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import Pagination from './Pagination';

class Bars extends Component {
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
  renderyelpBars(){
    const { yelpBars } = this.props;
    if(_.isEmpty(yelpBars || yelpBars.length === 0)){
      return;
    }
    else {
      return (
          <div>
            <h4 className="mainSubHeading">Bars</h4>
            <Pagination data={yelpBars} />
          </div>
      );
    }
  }
  render() {
    return(
      <div className="col">

        {this.renderyelpBars()}
      </div>
    );
  }
}

function mapStateToProps({ yelpBars }) {
  return {
    yelpBars
  };
}

export default connect(mapStateToProps, actions)(Bars);
