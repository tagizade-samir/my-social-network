import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {

  let postsElems = props.posts
    .map((post) => <Post message={post.text} likeCount={post.likeCount} />)

  return (
    <div className={Classes.postMain}>
      {postsElems}
    </div>
  )
}

export default MyPosts