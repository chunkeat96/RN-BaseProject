import axios from 'axios';
import {getAccessToken} from '../global/asyncStorage';
import Config from '../global/env';
import ProfileAction from '../redux/actions/profileAction';

const printRequestLog = (api, data) => {
  const logString = `
  ======================== Request ========================
  
  api: ${api}
  request: ${JSON.stringify(data)}
  date: ${Date()}
  
  =========================================================
  `;

  console.log(logString);
};

const printResponseLog = (api, response, success) => {
  const title = success ? 'Response' : 'Error';
  const logString = `
  ======================== ${title} ========================
    
  api: ${api}
  response: ${
    typeof response === 'object' ? JSON.stringify(response) : response
  }
  date: ${Date()}
    
  =========================================================
  `;

  if (success) {
    console.log(logString);
  } else {
    console.error(logString);
  }
};

const baseUrl = Config.apiUrl;

export default class Api {
  static call = async (url, data, method = 'POST') => {
    // add default params
    if (!data) {
      data = {};
    }

    const configuratinObject = {
      method: method,
      params: data,
    };

    const token = await getAccessToken('');

    configuratinObject.url = `${baseUrl}${url}`;
    if (token) {
      configuratinObject.headers = {Authorization: `Bearer ${token}`};
    }

    printRequestLog(url, configuratinObject);

    try {
      const response = await axios(configuratinObject);
      const {code, data, msg} = response.data;

      if (response.status === 200) {
        if (code == 0) {
          printResponseLog(url, data, true);
          return {success: true, data: data, message: msg};
        } else {
          printResponseLog(url, msg, true);
          return {success: false, data: data, message: msg};
        }
      } else {
        printResponseLog(url, msg, false);
        return {success: false, data: null, message: msg};
      }
    } catch (error) {
      const status = error?.response?.status;
      const msg = error?.response?.data?.msg;

      printResponseLog(url, msg ?? error, false);

      if (status === 401) {
        // handle unauthorized: delete access token and local user data
        ProfileAction.instance.clearDataBeforeLogout();

        return {success: false, data: null, message: msg ?? ''};
      } else {
        return {success: false, data: null, message: 'Internal Server Error'};
      }
    }
  };
}
