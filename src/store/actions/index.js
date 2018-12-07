import streams from '../actions/apis/streams'

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
  } from './types';




export const signIn = userId => {
    return {
      type:  SIGN_IN,
      payload: userId
    };
  };

  export const signOut = () => {
    return {
      type:  SIGN_OUT
    };
  }


  export const createStream = formValues => async dispatch => {
    try {
      const response = await streams.post('/streams', formValues)
      dispatch({type: CREATE_STREAM, payload: response.data})
    } catch (error) {
      console.log(error);
    }
  }

  export const ferchStreams = () => async dispatch => {
    try {
      const response = await  streams.get('/streams')
      dispatch({type: FETCH_STREAMS, payload: response.data})
    } catch (error) {
      console.log(error);
    }
  }

  export const editStream = (id,formValues) => async dispatch => {
    try {
      const response = await  streams.put(`/streams/${id}`,formValues)
      dispatch({type: EDIT_STREAM, payload: response.data})
    } catch (error) {
      console.log(error);
    }
  }

  export const deleteStream = (id) => async dispatch => {
    try {
      await  streams.delete(`/streams/${id}`)
      dispatch({type: DELETE_STREAM, payload: id})
    } catch (error) {
      console.log(error);
    }
  }

