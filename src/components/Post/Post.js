import React, { Component } from 'react';
import Timestamp from '../Timestamp/Timestamp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        // console.log(this.state.post.data);
        return (
            <Card style={{display:'flex', margin:'5px'}}>
                <div style={{flex: '1 0 auto'}}>
                    <CardContent>
                        <Typography variant='subheading' align='left' noWrap={true}>{this.state.post.data.title}</Typography>
                        <Typography variant='caption' align='left'>/r/{this.state.post.data.subreddit} posted by {this.state.post.data.author} <Timestamp time={this.state.post.data.created}/></Typography>
                    </CardContent>
                </div>
                <div>
                    <CardMedia style={{height:80, width:90}} image={this.state.post.data.thumbnail}/>
                </div>
            </Card>
        )
    }
}

export default Post;