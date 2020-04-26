import Classes from './DialogsSend.module.css'
import React from 'react'
import { reduxForm, Field } from 'redux-form'

const DialogSendForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
        <Field
            component={'textarea'}
            name={'newMessageBody'}
            placeholder={'Enter your message'}
            className={Classes.headInput} />
        <button className={Classes.btn}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessage'
})(DialogSendForm)

const DialogsSend = (props) => {
    
    // let newMsgOnChange = (e) => {
    //     let text = e.target.value
    //     props.updateNewMsgText(text)
    // }

    // let addMessage = () => {
    //     props.addNewMessage()
    // }

    const sendMessage = (formData) => {
        props.addNewMessage(formData.newMessageBody)
    }
    
    return (
        <div className={Classes.dialogsSend}>
        <AddMessageFormRedux onSubmit={sendMessage} />
            </div>
    )
}

export default DialogsSend