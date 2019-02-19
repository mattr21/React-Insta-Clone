import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'


const PostContainer = props => {
    // console.log(props, "PostContainer")
    return (
        <div className="postContainer">
          {props.post.comments.map(comment => <CommentSection comment={comment} />)}
          <input className="input" type="text" placeholder="Add a comment..."/>
        </div>
    );
}

export default PostContainer;