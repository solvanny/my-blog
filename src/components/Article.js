import React, { Component } from 'react';
 

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>;
    };

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h1>{article.title}</h1>
                    <button onClick = {this.toggleOpen}> 
                        { isOpen ? 'Close' : 'Open' }
                    </button>
                    <br />
                    <br />
                {this.getBody()}
            </div>
        );
    }
}

export default Article;