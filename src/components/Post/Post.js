import React, { Component } from 'react';
import Timestamp from '../Timestamp/Timestamp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        // console.log(this.state.post.data);
        return (
            <Paper style={{display:'flex', margin:'5px'}}>
                <Grid container wrap="nowrap" alignItems={'center'}>
                    <Grid item xs zeroMinWidth style={{padding:'15px'}}>
                        <div>
                            <Typography variant='subheading' align='left' noWrap>{this.props.post.data.title}</Typography>
                            <Typography variant='caption' align='left'>/r/{this.props.post.data.subreddit} posted by {this.state.post.data.author} <Timestamp time={this.state.post.data.created}/></Typography>
                        </div>
                    </Grid>
                    {this.props.post.data.thumbnail !== "default" ? 
                    <Grid item style={{paddingTop:'5px', paddingRight:'5px'}}>
                        <div>
                            <img style={{maxheight:100, maxWidth:100, border: '1px solid #ddd', borderRadius: '4px'}} src={this.props.post.data.thumbnail}/>
                        </div>
                    </Grid> 
                    : null}
                    
                </Grid>
            </Paper>
        )
    }
}

export default Post;