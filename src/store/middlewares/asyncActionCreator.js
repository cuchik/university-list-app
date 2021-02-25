import isEmpty from 'lodash/isEmpty';

const asyncActionCreator = ({ dispatch }) => next => async action => {
  const {
    isAsyncCall,
    baseType,
    asyncCall,
    payload = {},
    afterSuccessCall = () => {},
    afterFailureCall = () => {},
  } = action;

  if (!isAsyncCall) {
    return next(action);
  }

  if (typeof asyncCall !== 'function') {
    throw new Error('Expected asyncCall to be a function.');
  }

  try {
    dispatch({
      type: `${baseType}_REQUEST`,
      payload,
    });
    const response = await asyncCall(dispatch);
    // TODO: make condition for success api calling
    // eslint-disable-next-line no-console
    console.log('response', response);
    if (!isEmpty(response)) {
      dispatch({
        type: `${baseType}_SUCCESS`,
        payload,
        response: response || {},
      });
      afterSuccessCall(dispatch, response);
    } else {
      dispatch({
        type: `${baseType}_FAILURE`,
        payload,
        error: response,
      });
      afterFailureCall(dispatch, response);
    }
  } catch (error) {
    dispatch({
      type: `${baseType}_FAILURE`,
      payload,
      error,
    });
    afterFailureCall(dispatch, error);
  }
  return true;
};

export default asyncActionCreator;
