import React from 'react';
import Classes from './MyPosts.module.css'

const MyPosts = (props) => {

  return (
    <div className={Classes.postMain}>{props.postsElems}</div>
  )
}

export default MyPosts