import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import {setAuthUserData} from '../../Redux/authReducer'
import {getAuthUser, logoutUser} from '../../Redux/authReducer'

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUser()
  // }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToPtops = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToPtops, {
  setAuthUserData,
  getAuthUser,
  logoutUser
})(HeaderContainer);