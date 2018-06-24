import React, { Component } from 'react';

class Thumbnail extends Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        return ( <img className="thumbnail" src={this.state.src}/> );
    }
}

export default Thumbnail;
