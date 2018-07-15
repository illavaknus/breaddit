import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
            after: null,
            before: null,  // not useful since we have retrievalCount
            retrievalCount: 10,
            hasMorePosts: true
        };
    }

    _retrievePosts() {
        axios.get('https://www.reddit.com/.json?limit='+this.state.retrievalCount+'&after='+this.state.after)
            .then(res => {
                let posts = this.state.posts;
                res.data.data.children.map(post => {
                    posts.push(post);
                    return null;
                })
                this.setState({
                    isLoaded: true,
                    after: res.data.data.after,
                    before: res.data.data.before
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this._retrievePosts();
    }

    render() {
    const loader = 
        (<Grid container justify="center" style={{padding:'5px'}}>
            <Grid item xs={1}>
                <CircularProgress/>
            </Grid>
        </Grid>);

        return (
            <div>
                {
                    this.state.isLoaded ?  
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this._retrievePosts.bind(this)}
                        hasMore={this.state.hasMorePosts}
                        loader={loader}>

                        <Paper container spacing={24}>
                            {Object.keys(this.state.posts).map(index => <Post post = {this.state.posts[index]} key = {index} />)}
                        </Paper> 
                    </InfiniteScroll>
                    : <LinearProgress/>
                }
            </div>
        );
        }
    }

    export default Content;