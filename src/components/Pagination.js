import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentpage: 1,
      dataPerPage: 0
    };

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      currentPage: 1,
      dataPerPage: this.props.data.length/4
    });
  }

  handleNumberClick(event) {
    event.preventDefault();
    this.setState({
     currentPage: Number(event.target.id)
    });
  }
  handleBackClick(event){
    event.preventDefault();
    if(this.state.currentPage !== 1){
      this.setState({
        currentPage: this.state.currentPage-1
      })
    }
  }
  handleForwardClick(event) {
    event.preventDefault();
    if(this.state.currentPage !== this.props.data.length/this.state.dataPerPage){
      this.setState({
        currentPage: this.state.currentPage+1
      })
    }
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
        return <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />;
      case 2:
        return (
          <div>
            <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
            <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
          </div>
        );
      case 3:
        return(
          <div>
            <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
            <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
            <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
          </div>
        );
      case 4:
      return(
        <div>
          <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
          <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
          <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
          <img src="https://png.icons8.com/money/office/30" title="Money" width="30" height="30" />
        </div>
      );
      default:
        return;
    }
  }

  render() {
    const { data } = this.props;
    const { currentPage, dataPerPage } = this.state;
    const lastIndex = currentPage * dataPerPage;
    const firstIndex = lastIndex - dataPerPage;
    const currentData = data.slice(firstIndex, lastIndex);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      const pageNum = pageNumbers.length;
      return (
       <button type="button" className="btn btn-secondary paginationButtons" key={number} id={number}  onClick={this.handleNumberClick} >
         {number}
       </button>
      );
    });

    const renderData = currentData.map((singleData, index) => {
      //console.log(singleData, index);
      return (
        <li key={singleData.id} className="list-group-item">
          <div className='col-12 col-md-auto'>
            <img className="paginatedImages" src={singleData.image_url} />
          </div>
          <div className="col-6">
            <h5>{singleData.name}</h5>
            {this.renderStars(singleData.rating)}
            <div style={{marginTop: 5+'px'}}>
              {this.renderPrice(singleData.price)}
            </div>
          </div>
        </li>
      );
    });

    return(
      <div>
        <div className="card">
          <ul className="list-group list-group-flush">
            {renderData}
          </ul>
        </div>
        <br />
        <nav aria-label="Page navigation" className="center">
          <ul className="pagination center">
            <button type="button" className="btn btn-secondary paginationButtons" onClick={this.handleBackClick} >
              <span aria-hidden="true">&laquo;</span>
            </button>
            {renderPageNumbers}
            <button type="button" className="btn btn-secondary paginationButtons"  onClick={this.handleForwardClick} >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
