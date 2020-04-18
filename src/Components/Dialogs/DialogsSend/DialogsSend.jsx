import Classes from './DialogsSend.module.css'
import React from 'react'

const DialogsSend = (props) => {
    
    let newMsgOnChange = (e) => {
        let text = e.target.value
        props.updateNewMsgText(text)
    }

    let addMessage = () => {
        props.addNewMessage()
    }
    
    return (
        <div className={Classes.dialogsSend}>
            <textarea
                className={Classes.headInput}
                value={props.newMsg}
                onChange={newMsgOnChange}></textarea>
            <button onClick={addMessage} className={Classes.btn}>Send</button>
        </div>
    )
}

export default DialogsSend