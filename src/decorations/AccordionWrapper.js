import React, { Component } from 'react';

export default(OriginalComponent) => class AccordionWrapper extends Component {
  state = {
    openId: false
  }

  toggleOpen = openId => ev => {
    this.setState({openId});
  }

  isOpen(id) {
    return id === this.state.openId;
  }

  renderItems() {
    return this.props.items.map(item => {
      return( 
        <li> 
            <OriginalComponent item={item} toggleOpen={this.toggleOpen(item.id)} isOpen={this.isOpen(item.id)} />
        </li>
      );  
    });
  }

  render() {
    return this.renderItems();
  }
}
