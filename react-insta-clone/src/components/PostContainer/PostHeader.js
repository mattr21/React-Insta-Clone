import React from 'react';

const PostHeader = props => {
    return (
        <div className="postHeader">
            <div>
                <img 
                    className="postHeaderImg" 
                    src={props.thumbnailUrl} 
                    alt=""
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
}

export default PostHeader;