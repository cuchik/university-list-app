import get from 'lodash/get';
import {
  asyncActionTypeFailure,
  asyncActionTypeRequest,
  asyncActionTypeSuccess,
  authTypes,
} from '../types';

const initialState = {
  currentUser: {
    loading: false,
    data: {},
    error: '',
  },
  login: {
    loading: false,
    access_token: null,
    is_password_changed: null,
    error: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // CUSTOM
    case authTypes.LOGOUT: {
      return {
        ...initialState,
      };
    }
    // GET_ME
    case asyncActionTypeRequest(authTypes.GET_ME): {
      return {
        ...state,
        currentUser: {
          data: {},
          error: '',
          loading: true,
        },
      };
    }
    case asyncActionTypeSuccess(authTypes.GET_ME): {
      return {
        ...state,
        currentUser: {
          data: get(action, 'response.data'),
          loading: false,
          error: '',
        },
      };
    }
    case asyncActionTypeFailure(authTypes.GET_ME): {
      return {
        ...state,
        currentUser: {
          loading: false,
          error: action.payload,
          data: {},
        },
      };
    }
    case asyncActionTypeRequest(authTypes.LOGIN): {
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
        },
      };
    }
    case asyncActionTypeSuccess(authTypes.LOGIN): {
      // TODO: get real token
      const token = 'token_test';
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          access_token: token || null,
          error: '',
        },
      };
    }
    case asyncActionTypeFailure(authTypes.LOGIN): {
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
