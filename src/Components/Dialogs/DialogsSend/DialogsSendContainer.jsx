import { addNewMsgActionCreator } from '../../../Redux/dialogsPageReducer'
import DialogsSend from './DialogsSend'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        newMsg: state.dialogsPage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (text) => {
            dispatch(addNewMsgActionCreator(text))
        }
    }
}

const DialogsSendContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsSend)

export default DialogsSendContainer