import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import PixabayImage from './PixabayImage';

class NYTArticles extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getNYTArticlesByCity(this.props.city);
  }

  renderNews(news) {
    return (
      <div className="col" key={news._id} >
        <p style={{'fontSize': '12px', 'marginBottom': '0px'}}>{news.byline.original}</p>
        {this.renderArticleImage(news.multimedia, news.news_desk, news.web_url, news.section_name)}
        <p style={{'fontSize': '14px'}}>{news.headline.main}</p>
      </div>
    );
  }

   renderArticleImage(imageArray, imageTerm, articleURL, sectionName) {
    const NYT_IMAGE_URL = `https://www.nytimes.com/`;
    const badgeArray = ['primary', 'success', 'info', 'warning', 'danger'];
    const randomNumber = Math.floor((Math.random() * 5) + 1)-1;
    if(imageArray.length === 3) {
      const resultURL = `${NYT_IMAGE_URL}/${imageArray[2].url}`;
      const customClassName = `badge badge-${badgeArray[randomNumber]} overlayBadge`;
      return <a target="_blank" href={articleURL}><img className="newsImages" src={resultURL} /><span className={customClassName}>{sectionName}</span></a>;
    }
    else if (imageArray.length === 2) {
      const resultURL = `${NYT_IMAGE_URL}/${imageArray[1].url}`;
      const customClassName = `badge badge-${badgeArray[randomNumber]} overlayBadge`;
      return <a target="_blank" href={articleURL}><img className="newsImages" src={resultURL} /><span className={customClassName}>{sectionName}</span></a>;
    }
    else if (imageArray.length === 1){
      const resultURL = `${NYT_IMAGE_URL}/${imageArray[0].url}`;
      const customClassName = `badge badge-${badgeArray[randomNumber]} overlayBadge`;
      return <a target="_blank" href={articleURL}><img className="newsImages" src={resultURL} /><span className={customClassName}>{sectionName}</span></a>;
    }
    else {
      if(imageTerm === 'None') {
        //Get Random Image
        const customClassName = `badge badge-${badgeArray[randomNumber]} overlayBadge`;
        return <a target="_blank" href={articleURL}><img className="newsImages" src="http://hdimages.org/wp-content/uploads/2017/03/placeholder-image10.jpg"/><span className={customClassName}>{sectionName}</span></a>;
      } else {
        //return <PixabayImage imageTerm={imageTerm} />
        // Get Image Term Image
        //<PlaceholderImage props={this.props.pixabayImage} />
        const customClassName = `badge badge-${badgeArray[randomNumber]} overlayBadge`;
        return <a target="_blank" href={articleURL}><img className="newsImages" src="http://hdimages.org/wp-content/uploads/2017/03/placeholder-image10.jpg"/><span className={customClassName}>{sectionName}</span></a>;
        //console.log(`Image for ${imageTerm}`);

      }
    }
  }

  /* THIS IS TO GET IMAGES FROM UNSPLASH API. PASSED THE RATE LIMIT
  renderArticleImage(imageArray, imageTerm) {
    const NYT_IMAGE_URL = `https://www.nytimes.com/`;
    if(imageArray.length === 3) {
      const resultURL = `${NYT_IMAGE_URL}/${imageArray[2].url}`;
      return <img className="newsImages" src={resultURL} />;
    }
    else if (imageArray.length === 2) {
      const resultURL = `${NYT_IMAGE_URL}/${imageArray[1].url}`;
      return <img src={resultURL} />;
    }
    else if (imageArray.length === 1){
      const resultURL = `${NYT_IMAGE_URL}/${imageArray[0].url}`;
      return <img src={resultURL} />;
    }
    else {
      console.log(imageTerm);
      if(imageTerm === 'None') {
        this.props.getRandomUnsplashImage();
        return <img src={this.props.unsplashImage} />;
        //Get Random Image
      } else {
          this.props.getUnsplashImage(imageTerm);
          return <img src={this.props.unsplashImage} />;
      }

    }
  }
  */

  renderArticles() {
    const { nytArticles } = this.props;
    if(_.isEmpty(nytArticles)) {
      return;
    } else {
        return(
          <div className="row">
            {nytArticles.map(news => this.renderNews(news))}
          </div>
        );
    }
  }
  render() {
    return(
      <div>
        <h4 className="mainSubHeading">Recent News</h4>
        {this.renderArticles()}
      </div>
    );
  }
}

function mapStateToProps({ nytArticles }) {
  return {
    nytArticles
  };
}

export default connect(mapStateToProps, actions)(NYTArticles);
