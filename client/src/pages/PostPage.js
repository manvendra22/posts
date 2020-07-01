import React from 'react';

import Post from '../components/Post/Post'
import Comment from '../components/Comment/Comment'

export default function PostPage(props) {
    const { data } = props
    const { post, comments = [] } = data

    return (
        <>
            <div className="post-contaner">
                <Post post={post} />
            </div>
            <div className="heading">Comments</div>
            <div className="divider" />
            {comments.map(comment =>
                <div key={comment.id}>
                    <Comment comment={comment} />
                </div>
            )}
        </>
    )
};
