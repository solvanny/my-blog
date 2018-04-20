import React, {Component} from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import {articles} from './components/fixtures';

class App extends Component {
  render() {
    return (
      <div className="App">
        < ArticleList articles={articles}/>
      </div>
    );
  }
}

export default App;
