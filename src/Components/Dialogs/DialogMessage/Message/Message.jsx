import React from 'react'
import './Message.module.css';

const Message = (props) => {
    return(
        <div className='message'>
            {props.text}
        </div>
    )
}

export default Message