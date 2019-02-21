import React from 'react';
import Comment from './Comment'
import './CommentSection.css'
import AddComment from './AddComment'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    commentHandler = e => {
        this.setState({
            comment: e.target.value
        })
      }
    
    handleCommentSubmit = e => {
        e.preventDefault()
        const newComment = {
            text: this.state.comment,
            username: 'Matt' // This will eventually be changed to the user that is logged in
        }
        const comments = [...this.state.comments]
        comments.push(newComment)
        this.setState({ comments, comment: ''  })
      }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment comment={comment} />)}
                    
                <AddComment
                    comment={this.state.comment} 
                    commentHandler={this.commentHandler} 
                    handleCommentSubmit={this.handleCommentSubmit} 
                />
            </div>
        );
    }
}

export default CommentSection;