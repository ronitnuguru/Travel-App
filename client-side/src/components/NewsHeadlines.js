import React, { Component } from 'react';

class NewsHeadlines extends Component {
  renderArticles(article) {
    return (
      <div className="col" key={article.title} >
        {this.renderArticleImage(article.url, article.urlToImage)}
        <p style={{'fontSize': '14px'}}>{article.title}</p>
      </div>
    );
  }

  renderArticleImage(url, image) {
    return <a target="_blank" href={url}><img className="newsImages" src={image} /></a>;
  }
  renderHeader() {
      return (
        <div>
          <h4 className="mainSubHeading">Top {this.props.newsType} News</h4>
          <div className="row">
            {this.props.data.articles.map(article => this.renderArticles(article))}
          </div>
        </div>
      );

  }
  render() {
    return(
      <div>
        {this.renderHeader()}
      </div>
    );
  }
}

export default NewsHeadlines;
