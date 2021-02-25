import get from 'lodash/get';
import {
  asyncActionTypeFailure,
  asyncActionTypeRequest,
  asyncActionTypeSuccess,
  universityTypes,
} from '../types';

const initialState = {
  universities: {
    loading: false,
    data: [],
    error: '',
    status: 'init',
  },
  myUniversities: {
    loading: false,
    data: [],
    error: '',
  },
  searchedParams: {
    name: '',
    country: '',
  },
};

export default (state = initialState, action) => {
  const universitiesRes = get(action, 'response') || [];
  switch (action.type) {
    // CUSTOM
    // UPDATE_SEARCH_PARAMS
    case universityTypes.UPDATE_SEARCH_PARAMS: {
      return {
        ...state,
        searchedParams: action.payload,
      };
    }
    // ADD_MY_UNIVERSITY
    case universityTypes.ADD_MY_UNIVERSITY: {
      return {
        ...state,
        myUniversities: {
          loading: false,
          error: '',
          data: [
            ...(get(state, 'myUniversities.data') || []),
            ...[action.payload],
          ],
        },
      };
    }
    // REMOVE_MY_UNIVERSITY
    case universityTypes.REMOVE_MY_UNIVERSITY: {
      return {
        ...state,
        myUniversities: {
          loading: false,
          error: '',
          data: (get(state, 'myUniversities.data') || []).filter(
            u => u.id !== action.payload
          ),
        },
      };
    }
    // GET_UNIVERSITIES
    case asyncActionTypeRequest(universityTypes.GET_UNIVERSITIES): {
      return {
        ...state,
        universities: {
          ...state.universities,
          error: '',
          loading: true,
        },
      };
    }
    case asyncActionTypeSuccess(universityTypes.GET_UNIVERSITIES): {
      return {
        ...state,
        universities: {
          data: (universitiesRes.length > 100
            ? universitiesRes.slice(0, 100)
            : universitiesRes
          ).map(u => ({
            ...u,
            id: `${u.name}-${u.alpha_two_code}`,
          })),
          loading: false,
          error: '',
          status: 'loaded',
        },
      };
    }
    case asyncActionTypeFailure(universityTypes.GET_UNIVERSITIES): {
      return {
        ...state,
        universities: {
          loading: false,
          error: action.payload,
          data: [],
          status: 'loaded',
        },
      };
    }
    default:
      return state;
  }
};
