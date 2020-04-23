import React from 'react'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (state) => {}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer