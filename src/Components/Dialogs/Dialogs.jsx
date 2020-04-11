import React from 'react'
import Classes from './Dialogs.module.css';
import DialogList from './DialogList/DialogList.jsx'
import DialogMessage from './DialogMessage/DialogMessage.jsx'
import { BrowserRouter, Router } from 'react-router-dom';

const Dialogs = (props) => {

    return(
        <div className={Classes.dialogsWrapper}>
            <DialogList dialogs={props.state.dialogsData} />
            <DialogMessage messages={props.state.messageData} />
        </div>
    )
}

export default Dialogs