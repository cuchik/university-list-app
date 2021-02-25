import { useStoreActions } from 'src/store/hooks';
// SELECTORS
import * as universitySelectors from 'src/store/selectors/university';
// ACTIONS
import {
  getUniversities,
  updateSearchParams,
  addMyUniversity,
  removeMyUniversity,
} from 'src/store/actions/university';

export const useData = () => {
  return {
    universitiesLoading: universitySelectors.useSelectGetUniversitiesLoading(),
    universities: universitySelectors.useSelectGetUniversities(),
    getUniversitiesStatus: universitySelectors.useSelectStatusGetUniversities(),
    myUniversities: universitySelectors.useSelectMyUniversities(),
    searchedParams: universitySelectors.useSelectSearchedParams(),
  };
};

export const useActions = () => {
  return useStoreActions({
    getUniversities,
    updateSearchParams,
    addMyUniversity,
    removeMyUniversity,
  });
};
