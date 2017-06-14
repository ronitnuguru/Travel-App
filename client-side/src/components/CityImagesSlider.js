import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Loader from 'halogen/ClipLoader';

import * as actions from '../actions';

class CityImagesSlider extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getImages(this.props.city);
  }

  renderImage(image){
    return (
      <div key={image.id}>
        <img src={image.display_sizes[0].uri} className="cityImages"/>
      </div>
    );
  }

  renderCityImages() {
    const {gettyImages} = this.props;
    if(_.isEmpty(gettyImages)){
      return <Loader className="textCenter" color="#000000" size="50px" margin="4px"/>;
    } else {
      return (
        <div>
          <h4 className="mainSubHeading">Getty Imagery</h4>
          <div className="horizontal-scroll">
            <div>
              {gettyImages.map(image => this.renderImage(image))}
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderCityImages()}
      </div>
    );
  }
}

function mapStateToProps({ gettyImages }) {
  return {
    gettyImages
  };
}

export default connect (mapStateToProps, actions)(CityImagesSlider);
