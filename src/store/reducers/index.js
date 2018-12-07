import { combineReducers } from 'redux'
import isSignedIn from './authReducer'
import {reducer as fromReducer} from 'redux-form'


export default combineReducers({
    auth: isSignedIn,
    form: fromReducer

})
