import React from 'react';
import Classes from './InfoDesc.module.css'

const InfoDesc = (props) => {
  return (
    <div className={Classes.infoDesc}>
      <div className={Classes.infoDescTitle}>
        {props.fullName}
      </div>
      <div className={Classes.infoDescText}>
        <div className={Classes.inofItem}>Status: {props.aboutMe}</div>
        <div className={Classes.inofItem}>Job: {props.jobDesc}</div>
        <div className={Classes.inofItem}>WebSite: {props.website}</div>
      </div>
    </div>
  )
}

export default InfoDesc