import Request from './request';

export const apiGetUniversities = async (filters = {}) => {
  return Request.call({
    url: 'http://universities.hipolabs.com/search',
    method: 'GET',
    params: filters,
  });
};
