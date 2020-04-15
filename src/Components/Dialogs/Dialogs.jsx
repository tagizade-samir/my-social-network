import React from 'react'
import Classes from './Dialogs.module.css';
import DialogList from './DialogList/DialogList.jsx'
import DialogMessage from './DialogMessage/DialogMessage.jsx'
import DialogsSend from './DialogsSend/DialogsSend.jsx'

const Dialogs = (props) => {

    return(
        <div className={Classes.dialogsWrapper}>
            <DialogList dialogs={props.state.dialogsData} />
            <DialogMessage messages={props.state.messageData} />
            <DialogsSend 
                newMsg={props.state.newMessage}
                dispatch={props.dispatch} />
        </div>
    )
}

export default Dialogs