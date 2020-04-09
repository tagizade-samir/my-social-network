import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return(
      <div className={Classes.postMain}>
        <Post message='Hello'/>
        <Post message='world'/>
        <Post message='That is' />
        <Post message='nuts!'/>
      </div>
    )
}

export default MyPosts