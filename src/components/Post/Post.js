import React, { Component } from 'react';
import Score from '../Score/Score';
import Thumbnail from '../Thumbnail/Thumbnail';
import Author from '../Author/Author';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        console.log(this.state.post.data);
        return (
            <Grid container xs={12} direction='row' alignItems='center' justify='center'>
                {/* <Paper> */}
                <Grid item xs={1}>
                    <Score score={this.state.post.data.ups}/>
                </Grid>
                <Grid item xs={3}>
                    <Thumbnail src={this.state.post.data.thumbnail}/>
                </Grid>
                <Grid item xs={8}>
                    <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
                        <Grid item xs={12}>
                            <div className="title">{this.state.post.data.title}</div>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction='row' alignItems='center' justify='flex-start'>
                                <Grid item xs={3}>
                                    <div className="subreddit">/r/{this.state.post.data.subreddit}</div>
                                </Grid>
                                <Grid item xs={9}>
                                    <Author author={this.state.post.data.author} created={this.state.post.data.created_utc}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="comments">{this.state.post.data.num_comments} comments</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Post;