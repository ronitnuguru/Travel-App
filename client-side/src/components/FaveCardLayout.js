import React, { Component } from 'react';
import _ from 'lodash';

class FaveCardLayout extends Component {
  constructor(props) {
    super(props);
  }
  renderStars(rating){
    const ratingPercentage= (rating/5)*100;
    return (
      <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={{width: ratingPercentage+'%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      </div>
    );
  }
  renderPrice(price){
    switch(price.length) {
      case 1:
        return <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />;
      case 2:
        return (
          <div>
            <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
            <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
          </div>
        );
      case 3:
        return(
          <div>
            <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
            <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
            <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
          </div>
        );
      case 4:
      return(
        <div>
          <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
          <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
          <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
          <img src="https://png.icons8.com/money/office/30" className="money" title="Money" width="30" height="30" />
        </div>
      );
      default:
        return;
    }
  }
  renderOpenOrClose(isClosed) {
    if(isClosed){
      return <p style={{color:'#ff000'}}>Closed</p>;
    }
    else {
      return <p style={{color:'green'}}>Open</p>;
    }
  }
  renderCategories(categories) {
    if (categories.length > 0){
      let categoryString = '';
      categories.map(category => {
        categoryString = categoryString.concat(`${category.title}, `);
      });
      const finalCategoryString = categoryString.substring(0, categoryString.length-2);
      return <small clasName="text-muted">{finalCategoryString}</small>;
    }
  }
  renderLocation(address) {
    if(address.length > 0) {
      let addressString = '';
      address.map(location => {
        addressString = addressString.concat(`${location}, `);
      });
      const finalAddressString = addressString.substring(0, addressString.length-2);
      return <strong><small clasName="text-muted">{finalAddressString}</small></strong>;
    }
  }
  renderCards(value) {
    return (
      <div className=".col card-spacing" key={value.id}>
      <div className="card card-size" key={value.id}>
        <img className="card-img-top" src={value.image_url} className="faveCardImages" />
        <div className="card-block">
          <h5>{value.name}</h5>
          {this.renderLocation(value.location.display_address)}
          {this.renderStars(value.rating)}
          <div style={{marginTop: 5+'px'}}>
            {this.renderPrice(value.price)}
          </div>
          {this.renderCategories(value.categories)}
          {this.renderOpenOrClose(value.isClosed)}
        </div>
      </div>
      </div>

    );
  }
  renderData() {
    const { data, header } = this.props;
    if(data.length !== 0) {
      return (
        <div>
          <h3 className="mainSubHeading">{header}</h3>
          <div className="row">
            {data.map(value => this.renderCards(value))}
          </div>
        </div>

      );
    }
    else {
      return;
    }
  }
  render() {
    return(
      <div className="container">
        {this.renderData()}
      </div>
    );
  }
}

export default FaveCardLayout;
