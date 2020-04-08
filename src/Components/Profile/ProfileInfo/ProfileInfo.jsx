import React from 'react';
import Classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
      <div className={Classes.info}>
        <div className={Classes.infoImgWrap}>
          <img className={Classes.infoImg} src='https://images.wallpaperscraft.ru/image/oblako_edinorog_raduzhnyj_139591_800x600.jpg'></img>
        </div>
        <div className={Classes.infoDesc}>
          <div className={Classes.infoDescTitle}>
            Samir T.
          </div>
          <div className={Classes.infoDescText}>
            <div className={Classes.inofItem}>Date of birth: 19.10.1995</div>
            <div className={Classes.inofItem}>City: baku</div>
            <div className={Classes.inofItem}>Education: DevEducation</div>
            <div className={Classes.inofItem}>WebSite: template.com</div>
          </div>
        </div>
      </div>
    )
}

export default ProfileInfo