import React from 'react';
import Classes from './ProfileInfo.module.css'
import InfoDesc from './InfoDesc/InfoDesc.jsx'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={Classes.info}>
        <div className={Classes.infoImgWrap}>
          <img className={Classes.infoImg} src={props.profile.photos.large}></img>
        </div>
        <InfoDesc
          fullName={props.profile.fullName}
          aboutMe={props.profile.aboutMe}
          jobDesc={props.profile.lookingForAJobDescription}
          website='template.com' />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo