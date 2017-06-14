import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    return [
      <li className="nav-item" key={1}><Link className="nav-link" to="/current-location">Current Location</Link></li>,
      <li className="nav-item" key={2}><Link className="nav-link" to="/favorites">Favorites</Link></li>
    ];
  }
  render() {
    return (
      <div className="container header">
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">Travel+News</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
               {this.renderLinks()}
             </ul>
           </div>
        </nav>
      </div>
    );
  }
}

export default Header;
