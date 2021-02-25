import {
  useReducerData,
  useReducerLoading,
  useReducerAttribute,
} from 'src/store/hooks';
import { REDUCER_NAMES, REDUCER_ATTRIBUTES } from 'src/helper/store';

export const useSelectGetUniversitiesLoading = () => {
  return useReducerLoading(
    REDUCER_NAMES.UNIVERSITY,
    REDUCER_ATTRIBUTES.UNIVERSITY.UNIVERSITIES
  );
};
export const useSelectGetUniversities = () => {
  return useReducerData(
    REDUCER_NAMES.UNIVERSITY,
    REDUCER_ATTRIBUTES.UNIVERSITY.UNIVERSITIES,
    {}
  );
};
export const useSelectStatusGetUniversities = () => {
  return useReducerAttribute(
    REDUCER_NAMES.UNIVERSITY,
    `${REDUCER_ATTRIBUTES.UNIVERSITY.UNIVERSITIES}.status`,
    ''
  );
};
export const useSelectSearchedParams = () => {
  return useReducerAttribute(
    REDUCER_NAMES.UNIVERSITY,
    REDUCER_ATTRIBUTES.UNIVERSITY.SEARCHED_PARAMS,
    {}
  );
};
export const useSelectMyUniversities = () => {
  return useReducerData(
    REDUCER_NAMES.UNIVERSITY,
    REDUCER_ATTRIBUTES.UNIVERSITY.MY_UNIVERSITIES,
    {}
  );
};
