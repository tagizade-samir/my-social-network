import { connect } from 'react-redux'
import usersPageReducer, { 
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress
} from '../../Redux/usersPageReducer'
import Users from './Users'
import React from 'react'
import * as axios from 'axios'
import Preloader from '../Common/Preloader/Preloader'
import { usersAPI } from '../../API/Api'
import {getUsers} from '../../Redux/usersPageReducer'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    unfollowSuccess={this.props.unfollowSuccess}
                    followSuccess={this.props.followSuccess}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress} />
            </React.Fragment>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(UsersContainer)