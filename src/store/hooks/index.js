import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectData,
  selectLoading,
  selectTotal,
  selectAttribute,
  selectError,
} from 'src/store/selectors';

const useReducerData = (reducerName, attr, defaultValue) => {
  return useSelector(state =>
    selectData(reducerName, attr, defaultValue)(state)
  );
};
const useReducerLoading = (reducerName, attr) => {
  return useSelector(state => selectLoading(reducerName, attr, false)(state));
};
const useReducerError = (reducerName, attr, defaultValue) => {
  return useSelector(state =>
    selectError(reducerName, attr, defaultValue)(state)
  );
};
const useReducerTotal = (reducerName, attr) => {
  return useSelector(state => selectTotal(reducerName, attr, 0)(state));
};
const useReducerAttribute = (reducerName, attr, defaultValue) => {
  return useSelector(state =>
    selectAttribute(reducerName, attr, defaultValue)(state)
  );
};

const useStoreActions = actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions || {}, dispatch);
};

export {
  useReducerData,
  useReducerLoading,
  useReducerError,
  useReducerTotal,
  useStoreActions,
  useReducerAttribute,
};
