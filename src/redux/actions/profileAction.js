import {
  callGetUser,
  callLogout,
  clearLocalData,
  initAccessToken,
  setUserInfo,
} from '.';
import {getAccessToken} from '../../global/asyncStorage';
import store from '../store';

export default class ProfileAction {
  static instance = new ProfileAction();

  static async init() {
    const token = await getAccessToken('');
    store.dispatch(initAccessToken(token));

    // init get user
    await this.instance.getUser();
  }

  async getUser() {
    const isLogin = store.getState().accessToken;
    if (!isLogin) {
      return;
    }

    const response = await callGetUser();
    if (response.success) {
      const data = response?.data;
      store.dispatch(setUserInfo(data));
      return data;
    } else {
      return false;
    }
  }

  async clearDataBeforeLogout() {
    clearLocalData();
  }

  async logout() {
    const response = callLogout();
    if (response.success) {
      this.clearDataBeforeLogout();
      return true;
    } else {
      showToast(response.message);
      return false;
    }
  }
}
