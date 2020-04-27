import {authAPI} from '../API/Api'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const getAuthUser = () => {
    return (dispatch) => {
        return authAPI.isAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let { login, id, email } = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const setAuthUserData = (
    userId, email, login, isAuth
    ) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })


export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginUser(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUser())
                } else {
                    let msg = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {
                        _error: msg
                    }))
                }
            })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        authAPI.logoutUser()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer