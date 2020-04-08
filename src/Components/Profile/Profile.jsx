import React from 'react';
import Classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import PostAdd from './PostAdd/PostAdd.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import Back from './Back/Back.jsx'

const Profile = () => {
    return(
      <div className={Classes.profile}>
        <Back />
        <ProfileInfo />
        <div className={Classes.posts}>
          <PostAdd />
          <MyPosts />
        </div>
      </div>
    )
}

export default Profile