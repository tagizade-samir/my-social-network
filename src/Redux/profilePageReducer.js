const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        { id: '1', text: 'Hello', likeCount: '12' },
        { id: '2', text: 'world', likeCount: '2' },
        { id: '3', text: 'That is', likeCount: '4' },
    ],
    newPostText: 'Hello bro'
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likeCount: 0
            }

            let stateCopy = { ...state }
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActioncreator = () => ({ type: ADD_POST })
export const updateNewPosrTextAction = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profilePageReducer