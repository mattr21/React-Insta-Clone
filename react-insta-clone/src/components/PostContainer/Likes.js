import React from 'react';

const Likes = props => {
    return (
        <div>
            <span onClick={props.addLike}>
                <i class="far fa-heart fa-lg"></i>
            </span>

            <span>
                <i class="far fa-comment fa-lg"></i>
            </span>

            <div>
                {props.likes}
            </div>
        </div>
    );
}

export default Likes;