import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return(
      <div className={Classes.postMain}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
}

export default MyPosts