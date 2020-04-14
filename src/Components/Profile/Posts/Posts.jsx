import React from 'react';
import Classes from './Posts.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import PostAdd from './PostAdd/PostAdd.jsx'

const Posts = (props) => {
    return(
        <div className={Classes.posts}>
          <PostAdd
            newPostText={props.posts.newPostText}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />
          <MyPosts posts={props.posts.postsData} />
        </div>
    )
}

export default Posts