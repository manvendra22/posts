import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ReactQueryDevtools } from 'react-query-devtools'

import './App.css';
import './Common.css'

import PostsPage from './pages/PostsPage'
import PostPage from './pages/PostPage'

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/post/:id">
            <PostPage />
          </Route>
          <Route path="/">
            <PostsPage />
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
