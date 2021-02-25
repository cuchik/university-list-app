import { apiGetUniversities } from 'src/api';
import { universityTypes } from '../types';

export const getUniversities = (filters, cb) => {
  return {
    isAsyncCall: true,
    baseType: universityTypes.GET_UNIVERSITIES,
    asyncCall: () => {
      return apiGetUniversities(filters);
    },
    afterSuccessCall: (_dispatch, response) => {
      if (cb) cb(response);
    },
    afterFailureCall: () => {
      if (cb) cb(false);
    },
  };
};

export const addMyUniversity = (data, cb) => async dispatch => {
  dispatch({
    type: universityTypes.ADD_MY_UNIVERSITY,
    payload: data,
  });
  if (cb) cb();
};

export const removeMyUniversity = (id, cb) => async dispatch => {
  dispatch({
    type: universityTypes.REMOVE_MY_UNIVERSITY,
    payload: id,
  });
  if (cb) cb();
};

export const updateSearchParams = (data, cb) => async dispatch => {
  dispatch({
    type: universityTypes.UPDATE_SEARCH_PARAMS,
    payload: data,
  });
  if (cb) cb();
};
