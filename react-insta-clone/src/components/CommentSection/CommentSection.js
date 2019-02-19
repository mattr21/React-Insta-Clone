import React from 'react';
import Comment from './Comment'
import './CommentSection.css'


const CommentSection = props => {
    // console.log(props, "CommentSection")
    return (
        <div>
            <Comment username={props.comment.username} text={props.comment.text}/>
        </div>

    );
}

export default CommentSection;