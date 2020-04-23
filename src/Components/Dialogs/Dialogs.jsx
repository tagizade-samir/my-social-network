import React from 'react'
import Classes from './Dialogs.module.css';
import DialogListContainer from './DialogList/DialogListContainer.jsx'
import DialogMessageContainer from './DialogMessage/DialogMessageContainer.jsx'
import DialogsSendContainer from './DialogsSend/DialogsSendContainer';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    if (!props.isAuth === false) {
        return <Redirect to={'/login'} />
    }

    return(
        <div className={Classes.dialogsWrapper}>
            <DialogListContainer />
            <DialogMessageContainer />
            <DialogsSendContainer />
        </div>
    )
}

export default Dialogs