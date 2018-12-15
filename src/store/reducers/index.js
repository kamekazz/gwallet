import { combineReducers } from 'redux'
import isSignedIn from './authReducer'
import message from './falchmessages';


export default combineReducers({
    auth: isSignedIn,
    message:message
})
