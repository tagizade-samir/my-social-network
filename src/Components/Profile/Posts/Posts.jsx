import React from 'react';
import Classes from './Posts.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import PostAdd from './PostAdd/PostAdd.jsx'

const Posts = (props) => {
    return(
        <div className={Classes.posts}>
          <PostAdd />
          <MyPosts posts={props.posts} />
        </div>
    )
}

export default Posts