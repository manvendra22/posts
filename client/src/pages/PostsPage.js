import React from 'react';
import { useQuery } from 'react-query'
import { useHistory } from "react-router";

import Post from '../components/Post/Post'

export default function PostsPage(props) {
    const { isLoading, error, data } = useQuery('posts', () =>
        fetch('/api/posts').then(res =>
            res.json()
        )
    )

    const history = useHistory()

    if (isLoading)
        return <div className="loader">Loading <i className="fa fa-spinner fa-spin"></i></div>

    return (
        <>
            <div className="heading">Latest stories</div>
            <div className="divider" />
            {
                data.length && data.map(post =>
                    <div key={post.id}>
                        <Post post={post} />
                        <button className="primary-button" onClick={() => history.push(`/post/${post.id}`)}>
                            Read On
                        </button>
                        <div className="divider" />
                    </div>
                )
            }
        </>
    )
};
