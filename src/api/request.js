/* eslint-disable no-console */
import BaseAxios from 'axios';
import get from 'lodash/get';
import { store } from 'src/store';

class Request {
  axios;

  constructor() {
    this.axios = BaseAxios.create({ timeout: 60000 });
  }

  async call(config) {
    try {
      const serverBaseUrl = process.env.REACT_APP_API_BASE_URL;
      const state = store.getState();
      const token = get(state, 'auth.login.access_token', '');
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          token || config.token ? `Bearer ${token || config.token}` : undefined,
      };
      const res = await this.axios.request({
        baseURL: serverBaseUrl,
        headers,
        ...config,
      });
      const status = get(res, 'data.status');
      if (status === 0) {
        const message = get(res, 'data.message', '');
        // TODO: display message with toast
        console.log(message);
        throw res;
      } else {
        // TODO: pagination for data
        return res.data;
      }
    } catch (error) {
      const errMessageWithout200Code = get(error, 'response.data.error');
      if (errMessageWithout200Code) {
        // TODO: display message with toast
        console.log('errMessageWithout200Code', errMessageWithout200Code);
        throw error;
      }
      const { response } = error;
      if (response) {
        const { data } = response;
        if (data) {
          const { message } = data;
          let errMessage = '';

          if (typeof message === 'string') {
            errMessage = message;
          } else if (message instanceof Object) {
            Object.keys(message).map(k => {
              errMessage += message[k].join(',');
              return true;
            });
          }

          if (errMessage !== '') {
            // TODO: display message with toast
            console.log('errMessage', errMessage);
          }
        }
      }
      throw error;
    }
  }
}

export default new Request();
