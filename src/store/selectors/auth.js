import {
  useReducerData,
  useReducerLoading,
  useReducerAttribute,
} from 'src/store/hooks';
import { REDUCER_NAMES, REDUCER_ATTRIBUTES } from 'src/helper/store';

export const useSelectCurrentUserLoading = () => {
  return useReducerLoading(
    REDUCER_NAMES.AUTH,
    REDUCER_ATTRIBUTES.AUTH.CURRENT_USER
  );
};
export const useSelectCurrentUser = () => {
  return useReducerData(
    REDUCER_NAMES.AUTH,
    REDUCER_ATTRIBUTES.AUTH.CURRENT_USER,
    {}
  );
};
export const useSelectLoginLoading = () => {
  return useReducerLoading(REDUCER_NAMES.AUTH, REDUCER_ATTRIBUTES.AUTH.LOGIN);
};
export const useSelectAccessToken = () => {
  return useReducerAttribute(
    REDUCER_NAMES.AUTH,
    `${REDUCER_ATTRIBUTES.AUTH.LOGIN}.access_token`,
    null
  );
};
