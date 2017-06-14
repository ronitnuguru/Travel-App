import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class PixabayImage extends Component {
  state = {
    term
  };
  
  render() {
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps({ pixabayImage }) {
  return {
    pixabayImage
  };
}

export default connect (mapStateToProps, actions) (PixabayImage);
