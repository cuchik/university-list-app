import Request from './request';

export const apiGetMe = async () => {
  return Request.call({
    // TODO: this is dummy api for testing, need to update with real project
    url: '/posts/1',
    method: 'GET',
  });
};

export const apiLogin = async (email, password) => {
  return Request.call({
    // TODO: this is dummy api for testing, need to update with real project
    url: '/posts',
    method: 'POST',
    data: {
      title: email,
      body: password,
      userId: 1,
    },
  });
};
