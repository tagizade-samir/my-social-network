import React from 'react';
import Classes from './ProfileInfo.module.css'
import InfoDesc from './InfoDesc/InfoDesc.jsx'
import Back from './Back/Back.jsx'
import Preloader from '../../Common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <Back />
      <div className={Classes.info}>
        <div className={Classes.infoImgWrap}>
          <img className={Classes.infoImg} src={props.profile.photos.large}></img>
        </div>
        <InfoDesc
          fullName={props.profile.fullName}
          aboutMe={props.profile.aboutMe}
          jobDesc={props.profile.lookingForAJobDescription}
          website='template.com' />
      </div>
    </div>
  )
}

export default ProfileInfo