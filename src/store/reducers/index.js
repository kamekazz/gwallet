import { combineReducers } from 'redux'
import isSignedIn from './authReducer'



export default combineReducers({
    auth: isSignedIn,
})
