import { useStoreActions } from 'src/store/hooks';
// SELECTORS
import * as universitySelectors from 'src/store/selectors/university';
// ACTIONS
import { removeMyUniversity } from 'src/store/actions/university';

export const useData = () => {
  return {
    myUniversities: universitySelectors.useSelectMyUniversities(),
  };
};

export const useActions = () => {
  return useStoreActions({
    removeMyUniversity,
  });
};
