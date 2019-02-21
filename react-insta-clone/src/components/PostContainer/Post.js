import React from 'react';
import PostHeader from './PostHeader';
import Likes from './Likes'
import CommentSection from '../CommentSection/CommentSection'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }; 
    }

    addLike = () => {
        let likes = this.state.likes + 1
        this.setState({ likes })
    }

    render() {
        return (
            <div>
                <PostHeader 
                    thumbnailUrl={this.props.post.thumbnailUrl} 
                    username={this.props.post.username}
                />

                <div>
                    <img 
                        className="postPic" 
                        src={this.props.post.imageUrl} 
                        alt=""/>
                </div>

                <Likes 
                    addLike={this.addLike}
                    likes={this.state.likes}
                />

                <CommentSection 
                    comments={this.props.post.comments}
                />
            </div>
        );
    }
}

export default Post;