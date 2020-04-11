import React from 'react';
import Classes from './InfoDesc.module.css'

const InfoDesc = (props) => {
  return (
    <div className={Classes.infoDesc}>
      <div className={Classes.infoDescTitle}>
        Samir T.
      </div>
      <div className={Classes.infoDescText}>
        <div className={Classes.inofItem}>Date of birth: {props.birthDate}</div>
        <div className={Classes.inofItem}>City: {props.city}</div>
        <div className={Classes.inofItem}>Education: {props.education}</div>
        <div className={Classes.inofItem}>WebSite: {props.website}</div>
      </div>
    </div>
  )
}

export default InfoDesc