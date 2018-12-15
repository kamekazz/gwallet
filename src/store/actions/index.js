// import history from '../../history';
// import streams from '../actions/apis/streams'
import {
    SIGN_IN,
    SIGN_OUT,
    FLASH_MESSAGES
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

export const newMassages = (text,type) => {
    let payload = {
      text:text,
      type:type,
    }
    return {
      type: FLASH_MESSAGES,
      payload: payload
    };
    
}


