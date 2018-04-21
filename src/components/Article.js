import React, {Component} from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';
import toggleOpen from '../decorations/toggleOpen';

class Article extends Component {
  static propTypes = {
    article: PropTypes
      .shape({
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        text: PropTypes.string})
      .isRequired
  };

  getBody() {
    const {article, isOpen} = this.props;

    if (!isOpen) return null;
    
    return (
      <section>
        <div>{article.text}</div>
        <Comments comments={article.comments}/>
      </section>
    );
  };

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <h1>{article.title}</h1>
        <button onClick={toggleOpen}>
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

export default toggleOpen(Article);