import React from 'react'
import Message from './Message/Message.jsx'
import {connect} from 'react-redux'
import DialogMessage from './DialogMessage'

let mapStateToProps = (state) => {
  return {
    messageElems: state.dialogsPage.messageData.map((message) => <Message text={message.text} />)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

const DialogMessageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogMessage)

export default DialogMessageContainer