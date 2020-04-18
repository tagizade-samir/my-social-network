import React from 'react'
import Classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={Classes.message}>
            {props.text}
        </div>
    )
}

export default Message