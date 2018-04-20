import React, {Component} from 'react';
import {articles} from './fixtures';
import Comments from './Comments';
import PropTypes from 'prop-types';

class Article extends Component {
  static propTypes = {
    article: PropTypes
      .shape({
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        text: PropTypes.string})
      .isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  getBody() {
    if (!this.state.isOpen) 
      return null;
    const {article} = this.props;
    return (
      <section>
        <div>{article.text}</div>
        <Comments comments={article.comments}/>
      </section>
    );
  };

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;

    return (
      <div>
        <h1>{article.title}</h1>
        <button onClick={this.toggleOpen}>
          {isOpen
            ? 'Close'
            : 'Open'}
        </button>
        <br/>
        <br/> {this.getBody()}
      </div>
    );
  }
}

export default Article;