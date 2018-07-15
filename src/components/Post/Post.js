import React, { Component } from 'react';
import Timestamp from 'react-timestamp';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        return (
            <a href={this.props.post.data.url} style={{textDecoration: 'none'}} target="_blank">
                <Paper style={{display:'flex', margin:'5px'}}>        
                    <Grid container wrap="nowrap" alignItems={'center'}>
                        <Grid item xs zeroMinWidth style={{padding:'15px'}}>
                            <div>
                                <Typography variant='caption' align='left'>r/{this.props.post.data.subreddit} by u/{this.state.post.data.author}</Typography>
                                <Typography variant='subheading' align='left' noWrap>{this.props.post.data.title}</Typography>
                                <Typography variant='caption' align='left'><Timestamp time={this.state.post.data.created} precision={2} utc={false}/></Typography>
                            </div>
                        </Grid>
                        {this.props.post.data.thumbnail === "default" || this.props.post.data.thumbnail === "self" ? 
                        null :
                        <Grid item style={{paddingTop:'5px', paddingRight:'5px'}}>
                            <div>
                                <img alt={"post thumbnail"} style={{maxheight:100, maxWidth:100, border: '1px solid #ddd', borderRadius: '4px'}} src={this.props.post.data.thumbnail}/>
                            </div>
                        </Grid>}
                    </Grid>
                </Paper>
            </a>
        )
    }
}

export default Post;