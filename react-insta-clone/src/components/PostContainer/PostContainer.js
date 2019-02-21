import React from 'react'
import './PostContainer.css'
import Post from './Post'

const PostContainer = props => {
    // console.log(props, "PostContainer")
    return (
        <div className="postContainer">
          {props.posts.map(post => <Post post={post} />)}
        </div>
    );
}

export default PostContainer;