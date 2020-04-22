import {createStore, combineReducers} from 'redux'
import profilePageReducer from './profilePageReducer'
import dialogsPageReducer from './dialogsPageReducer'
import navReducer from './navReducer'
import usersPageReducer from './usersPageReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    nav: navReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store