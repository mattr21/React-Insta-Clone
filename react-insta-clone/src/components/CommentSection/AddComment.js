import React from 'react';

const AddComment = props => {
    return (
        <form onSubmit={props.handleCommentSubmit}>
            <input 
                className="input" 
                type="text" 
                placeholder="Add a comment..."
                value={props.comment}
                onChange={props.commentHandler}
            />
        </form>
    );
}

export default AddComment;