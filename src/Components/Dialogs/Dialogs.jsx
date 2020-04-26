import React from 'react'
import Classes from './Dialogs.module.css';
import DialogListContainer from './DialogList/DialogListContainer.jsx'
import DialogMessageContainer from './DialogMessage/DialogMessageContainer.jsx'
import DialogsSendContainer from './DialogsSend/DialogsSendContainer';

const Dialogs = (props) => {

    return(
        <div className={Classes.dialogsWrapper}>
            <DialogListContainer />
            <DialogMessageContainer />
            <DialogsSendContainer />
        </div>
    )
}

export default Dialogs