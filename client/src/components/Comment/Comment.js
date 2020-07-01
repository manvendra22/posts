import React from 'react';
import './Comment.css';

import user from '../../user.svg'

export default function Comment(props) {
    const { comment } = props

    return (
        <div className="comment">
            <img src={user} className="person_image" />
            <div>
                <div className="person_name">
                    {comment?.name}
                </div>
                <div className="subtext">
                    {comment?.email}
                </div>
                <div className="content">
                    {comment?.body}
                </div>
                <button className="link-button">Reply</button>
            </div>
        </div>
    )
};
