import Classes from './DialogsSend.module.css'
import React from 'react'
import {addNewMsgActionCreator, updateMsgAction} from '../../../Redux/State'


const dialogsSend = (props) => {
    
    let newMsgOnChange = (e) => {
        let text = e.target.value
        props.dispatch(updateMsgAction(text))
    }

    let addMessage = () => {
        props.dispatch(addNewMsgActionCreator())
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

export default dialogsSend