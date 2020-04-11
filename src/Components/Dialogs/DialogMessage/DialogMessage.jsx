import React from 'react'
import Classes from './DialogMessage.module.css';
import Message from './Message/Message.jsx'

const DialogMessage = (props) => {

  let messageElems = props.messages
    .map((message) => <Message text={message.text} /> )

  return (
    <div className={Classes.dialogMessage}>
      {messageElems}
    </div>
  )
}

export default DialogMessage