import { useStoreActions } from 'src/store/hooks';
// ACTIONS
import { doLogout } from 'src/store/actions/auth';

export const useActions = () => {
  return useStoreActions({
    doLogout,
  });
};
