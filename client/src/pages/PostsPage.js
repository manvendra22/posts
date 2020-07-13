import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Post from '../components/Post/Post'

export default function PostsPage(props) {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    const history = useHistory()

    useEffect(function () {
        fetchPostsData()
    }, [])

    async function fetchPostsData() {
        setLoader(true)
        try {
            const response = await axios.get('/api/posts')
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
