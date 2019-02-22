import React from 'react';

const authenticate = PostsPage => LoginPage =>
    class extends React.Component {
        render() {
            if (localStorage.getItem('userName')) {
               return <PostsPage />
            } 
            return <LoginPage />
        }
    }

export default authenticate;