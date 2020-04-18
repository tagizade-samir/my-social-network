import React from 'react';
import Classes from './Posts.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import PostAddContainer from './PostAdd/PostAddContainer.jsx'

const Posts = () => {
    return(
        <div className={Classes.posts}>
          <PostAddContainer />
          <MyPostsContainer />
        </div>
    )
}

export default Posts