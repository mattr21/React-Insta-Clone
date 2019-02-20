import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
import Post from './Post'
import PostHeader from './PostHeader'


const PostContainer = props => {
    console.log(props, "PostContainer")
    return (
        <div className="postContainer">
          <PostHeader thumbnailUrl={props.post.thumbnailUrl} username={props.post.username}/>

          <Post imageUrl={props.post.imageUrl}/>

          <i class="far fa-heart fa-lg"></i>
          <i class="far fa-comment fa-lg"></i>

          <p><strong>{props.post.likes} likes</strong></p>

          {props.post.comments.map(comment => <CommentSection comment={comment} />)}
          <input className="input" type="text" placeholder="Add a comment..."/>
        </div>
    );
}

export default PostContainer;