import React, { Component } from 'react';

import FeaturedDestinations from './FeaturedDestinations';
import SearchLocation from './SearchLocation';
import TopHeadlines from './TopHeadlines';

class Home extends Component{
  render(){
    return(
      <div className="container">
            <SearchLocation />
            <FeaturedDestinations />
            <TopHeadlines />
      </div>
    );
  }
}

export default Home;
