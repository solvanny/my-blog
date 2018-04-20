import React, {Component} from 'react'

export default class Comments extends Component {
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

  getComments() {
    const {isOpen} = this.state;
    let arr = [];
    if (!this.props.comments) {
      return null;
    }
    arr.push(
      <button onClick={this.toggleOpen} >
        {isOpen
          ? 'Close'
          : 'Open'}
      </button>
    );

    if (!isOpen) 
      return arr;
    
    for (let comment in this.props.comments) {
      arr.push(
        <div key={this.props.comments[comment].id}>
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
    const {isOpen} = this.state;

    return (
      <div>
        {this.getComments()}
      </div>
    )
  }
}
