import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {getUserProfileThunk} from '../../Redux/profilePageReducer'
import {withRouter, Redirect} from 'react-router-dom'
import {profileAPI} from '../../API/Api'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfileThunk(userId)
  }



  render() {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'} />
    }

      return(
        <Profile {...this.props} profile={this.props.profile} />
      )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  getUserProfileThunk
})(WithUrlDataContainerComponent)