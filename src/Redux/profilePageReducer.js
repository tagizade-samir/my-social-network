import {profileAPI} from '../API/Api'

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USERS_PROFILE = 'SET_USERS_PROFILE',
    SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        { id: '1', text: 'Hello', likeCount: '12' },
        { id: '2', text: 'world', likeCount: '2' },
        { id: '3', text: 'That is', likeCount: '4' },
    ],
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, text: action.text, likeCount: 0}
            
            return { 
                ...state,
                postsData: [...state.postsData, newPost]
             }
        case SET_USERS_PROFILE:
            return { 
                ...state,
                profile: action.profile
             }
        case SET_STATUS:
            return { 
                ...state,
                status: action.status
             }
        default:
            return state
    }
}

export const addPostActioncreator = (text) => ({ type: ADD_POST, text })
export const updateNewPosrTextAction = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const setUserProfile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile: profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const getUserProfileThunk = (userId) =>{
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
          // this.props.setIsFetching(false)
          dispatch(setUserProfile(data))
      })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profilePageReducer