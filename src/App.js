import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsData: [],
    };
  }

  componentDidMount() {
    fetch('/sample_news_stories.json')
      .then((response) => response.json())
      .then((data) => this.setState({ newsData: data.results }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="huge-title">My News Feed</h1>
        <ul className="news-list">
          {this.state.newsData.map((news, index) => (
            <li key={index} className="news-item">
              <div className="news-image">
                <img
                  src={news.image_url || 'https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder-news.jpg'}
                  alt="News"
                />
              </div>
              <div className="news-details">
                <h2 className="news-title">
                  <a href={news.link} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h2>
                {news.creator && (
                  <p className="news-author">Author: {news.creator.join(', ')}</p>
                )}
                <p className="news-description">{news.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
