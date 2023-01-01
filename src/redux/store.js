import {configureStore} from '@reduxjs/toolkit';
import {accessToken, userInfo} from './reducers/profile';

const reducer = {
  accessToken: accessToken.reducer,
  userInfo: userInfo.reducer,
};

const store = configureStore({reducer});

export default store;
