import React, {Component} from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';
import AccordionWrapper from '../decorations/AccordionWrapper';

class Article extends Component {
  static propTypes = {
    item: PropTypes
      .shape({
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        text: PropTypes.string})
      .isRequired
  };

  getBody() {
    const {item, isOpen} = this.props;

    if (!isOpen) return null;
    
    return (
      <section>
        <div>{item.text}</div>
        <Comments comments={item.comments}/>
      </section>
    );
  };

  render() {
    const {item, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <h1>{item.title}</h1>
        <h2>{this.props.name}</h2>
        <button onClick={toggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        <br/>
        <br/> {this.getBody()}
      </div>
    );
  }
}

export default AccordionWrapper(Article);