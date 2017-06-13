import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaveCardLayout from './FaveCardLayout';

class Favorites extends Component {
  renderFavoritePage() {
    const { favoriteBars, favoriteRestaurants } = this.props;
    //console.log(favoriteBars.length, favoriteRestaurants.length);
    if(favoriteBars.length === 0 && favoriteRestaurants.length === 0) {
      return (
        <div className="textCenter">
          <h3>You Currently Have No Favorites</h3>
        </div>
      );
    }
    else {
      return (
        <div>
          <div>
            <FaveCardLayout data={favoriteRestaurants} header="Favorite Restaurants" />
          </div>
          <div>
            <FaveCardLayout data={favoriteBars} header="Favorite Bars" />
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.renderFavoritePage()}
      </div>
    );
  }
}

function mapStateToProps({ favoriteRestaurants, favoriteBars }) {
  return {
    favoriteRestaurants,
    favoriteBars
  };
}

export default connect(mapStateToProps)(Favorites);
