import union from 'lodash/union';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';

function getDiffObject(obj1Data, obj2Data) {
  const obj1 = obj1Data || {};
  const obj2 = obj2Data || {};
  const newObj = { ...obj2 };
  const keys = union(Object.keys(obj1), Object.keys(obj2));
  // eslint-disable-next-line
  keys.map(k => {
    if (isArray(obj2[k])) {
      newObj[k] = newObj[k].map((obj, i) => {
        let newArrObj = { ...obj };
        newArrObj = getDiffObject(obj1[k][i], newArrObj);
        return newArrObj;
      });
    } else if (isObject(obj2[k])) {
      newObj[k] = getDiffObject(obj1[k], obj2[k]);
    } else if (obj1[k] === obj2[k]) {
      delete newObj[k];
    }
  });
  return newObj;
}

export { getDiffObject };
