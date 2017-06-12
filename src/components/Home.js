import React, { Component } from 'react';

import FeaturedDestinations from './FeaturedDestinations';
import SearchLocation from './SearchLocation';

class Home extends Component{
  render(){
    return(
      <div className="container">
            <SearchLocation />
            <FeaturedDestinations />
      </div>
    );
  }
}

export default Home;
