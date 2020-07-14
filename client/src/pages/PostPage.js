import React from 'react';
import { useQuery } from 'react-query'
import { useParams } from "react-router";

import Post from '../components/Post/Post'
import Comment from '../components/Comment/Comment'

export default function PostPage() {
    let { id } = useParams();
    const { isLoading, error, data } = useQuery(['post', id], () =>
        fetch(`/api/posts?id=${id}`).then(res =>
            res.json()
        )
    )

    if (isLoading)
        return <div className="loader">Loading <i className="fa fa-spinner fa-spin"></i></div>

    return (
        <>
            <div className="post-contaner">
                <Post post={data.post} />
            </div>
            <div className="heading">Comments</div>
            <div className="divider" />
            {data?.comments.map(comment =>
                <div key={comment.id}>
                    <Comment comment={comment} />
                </div>
            )}
        </>
    )
};
