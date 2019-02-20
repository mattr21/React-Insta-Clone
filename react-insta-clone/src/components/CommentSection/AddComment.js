import React from 'react';

const AddComment = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                className="input" 
                type="text" 
                placeholder="Add a comment..."
                onChange={props.onCommentChange}
            />
        </form>
    );
}

export default AddComment;