import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

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
        console.log("component mounted" + this.state.isLoaded);
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
        return ( <Grid container spacing={24}> {this.state.isLoaded ? Object.keys(this.state.posts).map((index) => < Post post = {this.state.posts[index]} key = {index} />) : <span>Loading...</span >} </Grid> );
        }
    }

    export default Content;