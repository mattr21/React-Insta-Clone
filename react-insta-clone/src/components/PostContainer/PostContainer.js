import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'


const PostContainer = props => {
    // console.log(props, "PostContainer")
    return (
        <div className="postContainer">
          {props.post.comments.map(comment => <CommentSection comment={comment} />)}
          <input type="text" defaultValue="Add a comment..."/>
        </div>
    );
}

export default PostContainer;