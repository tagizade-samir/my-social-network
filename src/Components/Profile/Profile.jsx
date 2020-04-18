import React from 'react';
import Posts from './Posts/Posts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = () => {
    return(
      <div>
        <ProfileInfo />
        <Posts />
      </div>
    )
}

export default Profile