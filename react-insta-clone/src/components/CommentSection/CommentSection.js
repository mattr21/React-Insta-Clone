import React from 'react';
import Comments from './Comments'
import './CommentSection.css'
import AddComment from './AddComment'


const CommentSection = props => {
    // console.log(props, "CommentSection")
    return (
        <div>
            <div>
                <i class="far fa-heart fa-lg"></i>
                <i class="far fa-comment fa-lg"></i>

                <p><strong>{props.likes} likes</strong></p>

                {props.comments.map(comment => <Comments comment={comment} />)}

                <AddComment />
            </div>
        </div>
    );
}

export default CommentSection;