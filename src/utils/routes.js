import queryString from 'query-string';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isEmpty from 'lodash/isEmpty';

const isValidPath = path => {
  return path && path !== '#';
};

const getAllUrlParams = (search = '') => {
  const searchUrl = search;
  return queryString.parse(searchUrl.slice(1)) || {};
};

const getUrlParamValueByKey = (search = '', key = '') => {
  const values = getAllUrlParams(search);
  return get(values, key, '');
};

const removeAllSearchParam = (history, key) => {
  const currentPrams = getAllUrlParams(get(history, 'location.search'));
  if (isArray(key)) {
    key.map(k => {
      delete currentPrams[k];
      return true;
    });
  } else if (key) {
    delete currentPrams[key];
  }
  history.replace({ search: !key ? '' : queryString.stringify(currentPrams) });
};

const getUrlParamAsString = ({ history, searchObj }) => {
  return queryString.stringify(
    isObject(searchObj) && !isEmpty(searchObj)
      ? searchObj
      : getAllUrlParams(get(history, 'location.search', ''))
  );
};

const getUrlWithParams = (pathname, history) => {
  return `${pathname}?${getUrlParamAsString({ history })}`;
};

export {
  isValidPath,
  getAllUrlParams,
  getUrlParamValueByKey,
  removeAllSearchParam,
  getUrlParamAsString,
  getUrlWithParams,
};
