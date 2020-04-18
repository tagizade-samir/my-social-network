import React from 'react';
import Post from './Post/Post.jsx'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    postsElems: state.profilePage.postsData.map((post) => <Post message={post.text} likeCount={post.likeCount} />)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer