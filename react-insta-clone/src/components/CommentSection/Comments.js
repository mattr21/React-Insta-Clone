import React from 'react';

const Comments = props => {
    // console.log(props, "Comment")
    return (
        <div>
            <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    );
}

export default Comments;