import { combineReducers } from 'redux'
import isSignedIn from './authReducer'
import streamReducer from './streamReducer'
import {reducer as fromReducer} from 'redux-form'


export default combineReducers({
    auth: isSignedIn,
    streams: streamReducer,
    form: fromReducer

})
