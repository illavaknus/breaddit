import React, { Component } from 'react';

class TimeStamp extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date(props.time * 1000).toLocaleString()
        };
    }

    render(){
        return ( <span className="timestamp">{this.state.time}</span> );
    }
}

export default TimeStamp;
