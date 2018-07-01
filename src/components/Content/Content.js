import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://www.reddit.com/best.json?sort=new')
            .then(res => res.data.data.children)
            .then(res => {
                this.setState({
                    posts: res,
                    isLoaded: true
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return ( <Paper container spacing={24}> {this.state.isLoaded ? Object.keys(this.state.posts).map((index) => < Post post = {this.state.posts[index]} key = {index} />) : <span>Loading...</span >} </Paper> );
        }
    }

    export default Content;