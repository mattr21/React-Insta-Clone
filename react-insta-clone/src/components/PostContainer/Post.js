import React from 'react';

const Post = props => {
    // console.log(props, "Post")
    return (
        <div>
            <img className="postPic" src={props.imageUrl} alt=""/>
        </div>
    );
}

export default Post;