import React from 'react';
import Classes from './ProfileInfo.module.css'
import InfoDesc from './InfoDesc/InfoDesc.jsx'

const ProfileInfo = () => {
    return(
      <div className={Classes.info}>
        <div className={Classes.infoImgWrap}>
          <img className={Classes.infoImg} src='https://images.wallpaperscraft.ru/image/oblako_edinorog_raduzhnyj_139591_800x600.jpg'></img>
        </div>
        <InfoDesc birthDate='19.10.1995' city='Baku' education='DevEducation' website='template.com'/>
      </div>
    )
}

export default ProfileInfo