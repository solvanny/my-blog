import React, { Component } from 'react';
import './App.css';
import Article from './components/Article';
import { articles } from './components/fixtures';


class App extends Component {
  render() {
    return (
      <div className="App">
        < Article article = {articles[0]} />
      </div>
    );
  }
}

export default App;
