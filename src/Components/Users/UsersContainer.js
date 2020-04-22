import { connect } from 'react-redux'
import usersPageReducer, { follow, setIsFetching, unfollow, setUsers, setCurrentPage, setTotalUsersCount } from '../../Redux/usersPageReducer'
import Users from './Users'
import React from 'react'
import * as axios from 'axios'
import Preloader from '../Common/Preloader/Preloader'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
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
                    unfollow={this.props.unfollow}
                    follow={this.props.follow} />
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching 
})(UsersContainer)