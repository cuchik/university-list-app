import authTypes from './auth';
import universityTypes from './university';

export const asyncActionTypeRequest = baseAction => `${baseAction}_REQUEST`;
export const asyncActionTypeSuccess = baseAction => `${baseAction}_SUCCESS`;
export const asyncActionTypeFailure = baseAction => `${baseAction}_FAILURE`;

export { authTypes, universityTypes };
