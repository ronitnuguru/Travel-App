import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaveCardLayout from './FaveCardLayout';

class Favorites extends Component {
  render() {
    const { favoriteBars, favoriteRestaurants } = this.props;
    return (
      <div>
        <div>
          <h3 className="mainSubHeading">Favorite Restaurants</h3>
          <FaveCardLayout data={favoriteRestaurants} />
        </div>
        <div>
          <h3 className="mainSubHeading">Favorite Bars</h3>
          <FaveCardLayout data={favoriteBars} />
        </div>
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
