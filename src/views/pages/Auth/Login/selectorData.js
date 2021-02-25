import { useStoreActions } from 'src/store/hooks';
// SELECTORS
import * as authSelectors from 'src/store/selectors/auth';
// ACTIONS
import { doLogin } from 'src/store/actions/auth';

export const useData = () => {
  return {
    isLoggingIn: authSelectors.useSelectLoginLoading(),
    isLoggedIn: !!authSelectors.useSelectAccessToken(),
  };
};

export const useActions = () => {
  return useStoreActions({
    doLogin,
  });
};
