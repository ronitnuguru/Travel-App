import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import NewsHeadlines from './NewsHeadlines';

class TopHeadlines extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNewsHeadlines('cnn');
    this.props.getNewsHeadlines('national-geographic');
    this.props.getNewsHeadlines('espn');
  }
  renderHeadlines() {
    const { cnnHeadlines, natgeoHeadlines, espnHeadlines } = this.props;
    if (_.isEmpty(cnnHeadlines) || _.isEmpty(natgeoHeadlines) || _.isEmpty(espnHeadlines)) {
      return;
    } else {
      return (
        <div>
          <NewsHeadlines data={cnnHeadlines} newsType={'CNN'} />
          <NewsHeadlines data={natgeoHeadlines} newsType={'NatGeo'}  />
          <NewsHeadlines data={espnHeadlines} newsType={'ESPN'}  />
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.renderHeadlines()}
      </div>
    );
  }
}

function mapStateToProps ({ cnnHeadlines, natgeoHeadlines, espnHeadlines }) {
  return {
    cnnHeadlines,
    natgeoHeadlines,
    espnHeadlines
  };
}

export default connect(mapStateToProps, actions) (TopHeadlines);
