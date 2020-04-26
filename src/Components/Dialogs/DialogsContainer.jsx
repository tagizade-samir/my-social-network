import React from 'react'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {}
}

// const RedirectComponentDialogs = withAuthRedirect(Dialogs)

let mapDispatchToProps = (state) => {}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponentDialogs)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)