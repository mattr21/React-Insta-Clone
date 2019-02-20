import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
import Post from './Post'
import PostHeader from './PostHeader'


const PostContainer = props => {
    console.log(props, "PostContainer")
    return (
        <div className="postContainer">
          <PostHeader 
            thumbnailUrl={props.post.thumbnailUrl} username={props.post.username}
          />

          <Post imageUrl={props.post.imageUrl} />

          <CommentSection post={props.post} />
        </div>
    );
}

export default PostContainer;