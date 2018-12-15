// import history from '../../history';
// import streams from '../actions/apis/streams'
import {
    SIGN_IN,
    SIGN_OUT,
} from './types';




export const signIn = (userId,pmUserInfo) => {
  let payload = {
    userId: userId,
    userInfo: pmUserInfo
  }

    return {
      type:  SIGN_IN,
      payload: payload
    };
  };

  export const signOut = () => {
    return {
      type:  SIGN_OUT
    };
  }




