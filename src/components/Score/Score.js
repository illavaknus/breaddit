import React, {Component} from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: props.score > 1000 ? Math.round(props.score / 10) / 100 + 'k' : props.score
        };
    }

    render() {
        return (<div className = "score" > {this.state.score} </div>);
    }
}

export default Score;