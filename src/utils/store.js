import find from 'lodash/find';
import findIndex from 'lodash/findIndex';

const getNewDataByUpdateObj = (
  payload,
  oldData,
  attr = 'id',
  isUpdateAttr,
  updatedAttr
) => {
  const updatedData = payload || {};
  const newData = [...(oldData || [])];
  const updatedIndex = findIndex(newData, {
    [attr]: updatedData[attr],
  });
  const oldObject = find(newData, {
    [attr]: updatedData[attr],
  });
  if (updatedIndex >= 0) {
    newData[updatedIndex] = isUpdateAttr
      ? {
          ...oldObject,
          [updatedAttr]: updatedData[updatedAttr],
        }
      : updatedData;
  }
  return newData;
};

const getIsNoOrganization = organizationDetail => {
  return (organizationDetail || {}).id === 0;
};

export { getNewDataByUpdateObj, getIsNoOrganization };
