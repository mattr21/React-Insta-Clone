import React from 'react';

const Comment = props => {
    // console.log(props, "Comment")
    return (
        <div>
            <p><strong>{props.username}</strong> {props.text}</p>
        </div>
    );
}

export default Comment;