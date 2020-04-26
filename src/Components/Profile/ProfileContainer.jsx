import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {getUserProfileThunk, getStatus, updateStatus} from '../../Redux/profilePageReducer'
import {withRouter, Redirect} from 'react-router-dom'
import {profileAPI} from '../../API/Api'
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 7416
    }
    this.props.getUserProfileThunk(userId)
    this.props.getStatus(userId)
  }



  render() {
      return(
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus} />
      )
  }
}

// compose(
//   connect(mapStateToProps, {getUserProfileThunk}),
//   withRouter,
//   withAuthRedirect
// )(ProfileContainer)

// let RedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

// let WithUrlDataContainerComponent = withRouter(RedirectComponent)


export default compose(
  connect(mapStateToProps, {getUserProfileThunk, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)