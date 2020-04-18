import {createStore, combineReducers} from 'redux'
import profilePageReducer from './profilePageReducer'
import dialogsPageReducer from './dialogsPageReducer'
import navReducer from './navReducer'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    nav: navReducer
})

let store = createStore(reducers)

export default store