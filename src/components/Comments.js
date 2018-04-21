import React, {Component} from 'react';
import toggleOpen from '../decorations/toggleOpen';

class Comments extends Component {

  getComments() {
    const {isOpen} = this.props;
    let arr = [];
    if (!this.props.comments) {
      return null;
    }
    arr.push(
      <div>
        <br />
          <button onClick={this.props.toggleOpen} >
            {isOpen
              ? 'Hidden comments'
              : 'Show comments'}
          </button>
      </div>
    );

    if (!isOpen) 
      return arr;
    
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
    return (
      <div>
        {this.getComments()}
      </div>
    )
  }
}

export default toggleOpen(Comments);