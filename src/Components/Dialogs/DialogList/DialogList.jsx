import React from 'react'
import Classes from './DialogList.module.css';
import Dialog from './Dialog/Dialog.jsx';

const DialogList = (props) => {

    let dialogsElems = props.dialogs
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id} />)

    return (
        <div className={Classes.dialogList}>
            {dialogsElems}
        </div>
    )
}

export default DialogList