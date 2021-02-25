import { combineReducers } from 'redux';
import AuthReducer from './auth';
import UniversityReducer from './university';
import { authTypes, asyncActionTypeFailure } from '../types';

const reducers = {
  auth: AuthReducer,
  university: UniversityReducer,
};

const combinedReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (
    action.type === authTypes.LOGOUT ||
    action.type === asyncActionTypeFailure(authTypes.GET_ME)
  ) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default rootReducer;
