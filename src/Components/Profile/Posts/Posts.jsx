import React from 'react';
import Classes from './Posts.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import PostAdd from './PostAdd/PostAdd.jsx'

const Posts = (props) => {
    return(
        <div className={Classes.posts}>
          <PostAdd
            newPostText={props.posts.newPostText}
            dispatch={props.dispatch} />
          <MyPosts posts={props.posts.postsData} />
        </div>
    )
}

export default Posts