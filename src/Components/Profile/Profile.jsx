import React from 'react';
import Classes from './Profile.module.css'
import Posts from './Posts/Posts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
    return(
      <div>
        <ProfileInfo />
        <Posts posts={props.state.postsData} />
      </div>
    )
}

export default Profile