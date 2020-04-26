import React from 'react';
import Posts from './Posts/Posts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {
    return(
      <div>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus} />
        <Posts />
      </div>
    )
}

export default Profile