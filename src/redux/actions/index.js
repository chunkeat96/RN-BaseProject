import {accessToken, userInfo} from '../reducers/profile';
import store from '../store';

export const initAccessToken = token =>
  accessToken.actions.initAccessToken({accessToken: token});
export const setAccessToken = token =>
  accessToken.actions.setAccessToken({accessToken: token});
export const clearAccessToken = () => accessToken.actions.clearAccessToken();

export const setUserInfo = user => userInfo.actions.setUserInfo(user);
export const clearUserInfo = () => userInfo.actions.clearUserInfo();

export const clearLocalData = () => {
  store.dispatch(clearAccessToken());
  store.dispatch(clearUserInfo());
};

export const callGetUser = async () => {
  return await Api.call(Url.getUser, {}, 'GET');
};

export const callLogout = async () => {
  return await Api.call(Url.logout, {}, 'DELETE');
};
