import React, {Component} from 'react'
import Article from './Article';
import AccordionWrapper from '../decorations/toggleOpen';

const List = AccordionWrapper(Article);

class ArticleList extends Component {
  
  render() {

    return (
      <ul>
        <List items={this.props.articles}/>
      </ul>
    )
  }
}

export default ArticleList;