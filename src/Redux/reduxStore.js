import {createStore, combineReducers} from 'redux'
import profilePageReducer from './profilePageReducer'
import dialogsPageReducer from './dialogsPageReducer'
import navReducer from './navReducer'
import usersPageReducer from './usersPageReducer'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    nav: navReducer,
    usersPage: usersPageReducer
})

let store = createStore(reducers)

export default store