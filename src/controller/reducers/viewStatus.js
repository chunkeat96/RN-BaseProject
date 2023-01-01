import {createSlice} from '@reduxjs/toolkit';
import {StatusType} from '../actions';

const initialState = {
  state: StatusType.IDLE,
  message: '',
};

export const viewStatus = createSlice({
  name: 'viewStatus',
  initialState: initialState,
  reducers: {
    setViewStatus: (state, action) => (state = action.payload.viewStatus),
  },
});
