import React, { Component } from 'react';

export default(OriginalComponent) => class AccordionWrapper extends Component {
  state = {
    openId: null
  }

  toggleOpen = openId => ev => {
    if(openId === this.state.openId) {
      this.setState({openId: null});
    } else {
      this.setState({openId});
    }
  }

  isOpen(id) {
    return id === this.state.openId;
  }

  renderItems() {
    return this.props.items.map(item => {
      return( 
        <li key={item.id}> 
            <OriginalComponent item={item} toggleOpen={this.toggleOpen(item.id)} isOpen={this.isOpen(item.id)} />
        </li>
      );  
    });
  }

  render() {
    return this.renderItems();
  }
}
