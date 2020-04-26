import {createStore, combineReducers, applyMiddleware} from 'redux'
import profilePageReducer from './profilePageReducer'
import dialogsPageReducer from './dialogsPageReducer'
import navReducer from './navReducer'
import usersPageReducer from './usersPageReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    nav: navReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store