import React from 'react';
import Header from './Header'
import axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../Redux/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {login, id, email} = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

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

export default connect(mapStateToPtops, {setAuthUserData})(HeaderContainer);