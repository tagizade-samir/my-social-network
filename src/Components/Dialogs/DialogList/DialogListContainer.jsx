import React from 'react'
import Dialog from './Dialog/Dialog.jsx';
import DialogList from './DialogList'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogsElems: state.dialogsPage.dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id} />)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList)

export default DialogListContainer