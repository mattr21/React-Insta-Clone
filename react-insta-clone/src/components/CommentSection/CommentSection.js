import React from 'react';
import Comments from './Comments'
import './CommentSection.css'
import AddComment from './AddComment'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.post.likes,
            comments: this.props.post.comments,
            comment: ''
        }
    }

    onCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
      }
    
    
    handleSubmit = e => {
        e.preventDefault()
        const newComment = {
            text: this.state.comment,
            username: 'Matt' // This will eventually be changed to the user that is logged in
        }
        const comments = [...this.state.comments]
        comments.push(newComment)
        this.setState({ comments, comment: ''  })
      }

      onAddLike = () => {
        this.setState({likes: this.state.likes + 1})
      }


    // console.log(props, "CommentSection")
    render() {
        return (
            <div>
                <i onClick={this.onAddLike} class="far fa-heart fa-lg"></i>
                <i class="far fa-comment fa-lg"></i>

                <p>{this.state.likes}</p>

                {this.state.comments.map(comment => <Comments comment={comment} />)}
                    
                <AddComment onCommentChange={this.onCommentChange} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default CommentSection;