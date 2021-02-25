import { apiLogin, apiGetMe } from 'src/api';
import { authTypes } from '../types';

export const getMe = cb => {
  return {
    isAsyncCall: true,
    baseType: authTypes.GET_ME,
    asyncCall: () => {
      return apiGetMe();
    },
    afterSuccessCall: (_dispatch, response) => {
      if (cb) cb(response);
    },
    afterFailureCall: () => {
      if (cb) cb(false);
    },
  };
};

export const doLogin = (email, password, cb) => {
  return {
    isAsyncCall: true,
    baseType: authTypes.LOGIN,
    asyncCall: () => {
      return apiLogin(email, password);
    },
    afterSuccessCall: (_dispatch, response) => {
      cb(response);
    },
    afterFailureCall: () => {
      cb(false);
    },
  };
};

export const doLogout = cb => async dispatch => {
  dispatch({
    type: authTypes.LOGOUT,
  });
  if (cb) cb();
};
