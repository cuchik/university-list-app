const REDUCER_NAMES = {
  AUTH: 'auth',
  UNIVERSITY: 'university',
};
const REDUCER_ATTRIBUTES = {
  AUTH: {
    CURRENT_USER: 'currentUser',
    LOGIN: 'login',
  },
  UNIVERSITY: {
    UNIVERSITIES: 'universities',
    MY_UNIVERSITIES: 'myUniversities',
    SEARCHED_PARAMS: 'searchedParams',
  },
};

export { REDUCER_NAMES, REDUCER_ATTRIBUTES };
