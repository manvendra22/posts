import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

import Post from '../components/Post/Post'
import Comment from '../components/Comment/Comment'

export default function PostPage() {
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(true)

    let { id } = useParams();

    useEffect(function () {
        fetchPostData(id)
    }, [id])

    async function fetchPostData(id) {
        setLoader(true)
        try {
            const response = await axios.get(`/api/posts?id=${id}`)
            setData(response.data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoader(false)
        }
    }

    if (loader)
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
