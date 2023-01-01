import {createSlice} from '@reduxjs/toolkit';
import {storeAccessToken} from '../../global/asyncStorage';

export const accessToken = createSlice({
  name: 'accessToken',
  initialState: '',
  reducers: {
    initAccessToken: (state, action) => (state = action.payload.accessToken),
    setAccessToken: (state, action) => {
      state = action.payload.accessToken;
      storeAccessToken(state);
      return state;
    },
    clearAccessToken: (state, _) => {
      state = '';
      storeAccessToken(state);
      return state;
    },
  },
});

export const userInfo = createSlice({
  name: 'userInfo',
  initialState: {},
  reducers: {
    setUserInfo: (state, action) => {
      state = action.payload;
      return state;
    },
    clearUserInfo: (state, _) => {
      state = '';
      return state;
    },
  },
});
