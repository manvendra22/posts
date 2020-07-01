import React from 'react';
import {
    useHistory
} from "react-router-dom";

import Post from '../components/Post/Post'

export default function PostsPage(props) {
    const history = useHistory()
    const { data = [], handleClick, buttonLoader } = props

    return (
        <>
            <div className="heading">Latest stories</div>
            <div className="divider" />
            {data.length ? data.map(post =>
                <div key={post.id}>
                    <Post post={post} />
                    <button className="primary-button" onClick={() => handleClick(post.id, history)}>
                        {
                            buttonLoader ? <>Loading <i className="fa fa-spinner fa-spin"></i></> : 'Read On'
                        }
                    </button>
                    <div className="divider" />
                </div>
            ) : <div className="loader">Loading <i className="fa fa-spinner fa-spin"></i></div>}
        </>
    )
};
