import get from 'lodash/get';

const selectAttribute = (
  reducerKey,
  attrKey = '',
  defaultValue = ''
) => state => {
  const data = get(state, `${reducerKey}.${attrKey}`) || defaultValue;
  return data;
};
const selectData = (reducerKey, attrKey = '', defaultValue = []) => state => {
  const data = get(state, `${reducerKey}.${attrKey}.data`) || defaultValue;
  return data;
};
const selectLoading = (reducerKey, attrKey = '') => state => {
  return get(state, `${reducerKey}.${attrKey}.loading`, false);
};
const selectTotal = (reducerKey, attrKey = '') => state => {
  return get(state, `${reducerKey}.${attrKey}.totalNo`, 0);
};
const selectError = (reducerKey, attrKey = '', defaultValue = '') => state => {
  return get(state, `${reducerKey}.${attrKey}.error`) || defaultValue;
};

export { selectData, selectLoading, selectTotal, selectAttribute, selectError };
