import React from 'react';
import './Post.css';

export default function Post(props) {
    const { post } = props

    return (
        <div className="post">
            <div className="title">
                <span className="initial">{post?.title?.[0]}</span>
                {post?.title}
            </div>
            <div className="content">
                {post?.body}
            </div>
        </div>
    )
};
