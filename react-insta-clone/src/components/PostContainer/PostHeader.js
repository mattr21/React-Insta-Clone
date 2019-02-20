import React from 'react';

const PostHeader = props => {
    return (
        <div className="postHeader">
            <img className="postHeaderImg" src={props.thumbnailUrl} alt=""/>
            <p className="postHeaderUser">{props.username}</p>
        </div>
    );
}

export default PostHeader;