import React from 'react'
import Classes from './DialogList.module.css';

const DialogList = (props) => {

    return (
        <div className={Classes.dialogList}>{props.dialogsElems}</div>
    )
}

export default DialogList