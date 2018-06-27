import React, { Component } from 'react';

class Author extends Component {
    constructor(props){
        super(props);
        this.state = {
            author: props.author,
            created: new Date(props.created * 1000).toLocaleDateString()
        };
    }

    render(){
        return ( <span className="author">Posted by /u/{this.state.author} at {this.state.created}</span> );
    }
}

export default Author;
