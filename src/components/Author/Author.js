import React, { Component } from 'react';

class Author extends Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        return ( <div className="author">Posted by /u/{this.state.author} at {this.state.created}</div> );
    }
}

export default Author;
