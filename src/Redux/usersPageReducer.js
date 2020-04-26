import { usersAPI, followAPI } from '../API/Api'

const FOLLOW = 'FOLLOW',
UNFOLLOW = 'UNFOLLOW', SET_USERS = 'SET-USERS',
SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount })
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching: isFetching, userId: userId})

export const getUsers = (currentPage, pageSize) =>{
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const followSuccess = (userId) =>{
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        followAPI.followUser(userId).then(data => {
        if (data.resultCode == 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unfollowSuccess = (userId) =>{
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        followAPI.unfollowUser(userId).then(data => {
        if (data.resultCode == 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export default usersPageReducer