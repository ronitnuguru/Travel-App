import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import FeaturedCity from './components/FeaturedCity';
import CurrentLocation from './components/CurrentLocation';
import SearchedCity from './components/SearchedCity';
import Header from './components/Header';
import Favorites from './components/Favorites';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/location/:city" component={SearchedCity} />
          <Route path="/featured-destination/:city" component={FeaturedCity} />
          <Route path="/current-location" component={CurrentLocation} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
