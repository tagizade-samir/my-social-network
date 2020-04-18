import React from 'react'
import Classes from './DialogMessage.module.css';

const DialogMessage = (props) => {

  return (
    <div className={Classes.dialogMessage}>{props.messageElems}</div>
  )
}

export default DialogMessage