import React from 'react';
import Classes from './Profile.module.css'
import Posts from './Posts/Posts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
    return(
      <div>
        <ProfileInfo />
        <Posts
          posts={props.profilePage}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText} />
      </div>
    )
}

export default Profile