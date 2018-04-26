import React, {Component} from 'react';
import toggleOpen from '../decorations/toggleOpen';

class Comments extends Component {

  getComments() {
    if(!this.props.isOpen) {
      return null;
    }
    
    let arr = [];
    
    for (let comment in this.props.comments) {
      arr.push(
        <div key={this.props.comments[comment].id}>
        <br/>
          <ul>
            <li>
              <b>{this.props.comments[comment].user}</b>
            </li>
            <ul>
              <li>
                {this.props.comments[comment].text}
              </li>
            </ul>
          </ul>
        </div>
      );
    }

    return arr;
  }

  render() {
    if (!this.props.comments) {

      return null;
    }

    return (
      <div>
        <br />
        <button onClick={this.props.toggleOpen} >
          {this.props.isOpen
            ? 'Hidden comments'
            : 'Show comments'}
        </button>
        
        {this.getComments()}
      </div>
    )
  }
}

export default toggleOpen(Comments);