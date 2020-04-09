import React from 'react'
import './DialogMessage.module.css';
import Message from './Message/Message.jsx'

const DialogMessage = (props) => {
    return(
        <div className='dialogMessage'>
          <Message text='Hello, this is my first message'/>
          <Message text='I am glad to see this'/>
          <Message text='You are doing great'/>
          <Message text='Thanks, that really means a lot'/>
        </div>
    )
}

export default DialogMessage