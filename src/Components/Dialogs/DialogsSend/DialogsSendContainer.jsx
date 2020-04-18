import { addNewMsgActionCreator, updateMsgAction } from '../../../Redux/dialogsPageReducer'
import DialogsSend from './DialogsSend'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        newMsg: state.dialogsPage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMsgText: (text) => {
            dispatch(updateMsgAction(text))
        },
        addNewMessage: () => {
            dispatch(addNewMsgActionCreator())
        }
    }
}

const DialogsSendContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsSend)

export default DialogsSendContainer