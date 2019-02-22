import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage'
import authenticate from './components/authentication/authenticate'

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
        <LoginPage />
      </div>
    );
  }
}

export default authenticate(PostsPage)(LoginPage);
