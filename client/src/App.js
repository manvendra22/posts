import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

import './App.css';
import './Common.css'

import PostsPage from './pages/PostsPage'
import PostPage from './pages/PostPage'

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  const [buttonLoader, setButtonLoader] = useState(false)

  useEffect(function () {
    fetchPostsData()
  }, [])

  async function fetchPostsData() {
    try {
      const response = await axios.get('/api/posts')
      setPosts(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  async function fetchPostData(id, history) {
    setButtonLoader(true)
    try {
      const response = await axios.get(`/api/posts?id=${id}`)
      setPost(response.data)
      history.push('/story')
    } catch (err) {
      console.error(err)
    } finally {
      setButtonLoader(false)
    }
  }

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/story">
            <PostPage data={post} />
          </Route>
          <Route path="/">
            <PostsPage data={posts} handleClick={fetchPostData} buttonLoader={buttonLoader} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
