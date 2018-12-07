import {
    SIGN_IN,
    SIGN_OUT,
    // CREATE_STREAM,
    // FETCH_STREAMS,
    // FETCH_STREAM,
    // DELETE_STREAM,
    // EDIT_STREAM
  } from '../actions/types';

const initialState = {
    isSignedIn:null,
    userId:null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SIGN_IN:
    return { ...state, isSignedIn: true, userId: payload }

  case SIGN_OUT:
    return { ...state, isSignedIn: false, userId: null }

  default:
    return state
  }
}
