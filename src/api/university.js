import Request from './request';

export const apiGetUniversities = async (
  filters = {
    name: 'middle',
  }
) => {
  return Request.call({
    // TODO: this is dummy api for testing, need to update with real project
    url: 'http://universities.hipolabs.com/search',
    method: 'GET',
    params: filters,
  });
};
