import Classes from './DialogsSend.module.css'
import React from 'react'


const dialogsSend = (props) => {
    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value
        alert(text)
    }

    return (
        <div className={Classes.dialogsSend}>
            <textarea ref={newMessage} className={Classes.headInput}></textarea>
            <button onClick={addMessage} className={Classes.btn}>Send</button>
        </div>
    )
}

export default dialogsSend