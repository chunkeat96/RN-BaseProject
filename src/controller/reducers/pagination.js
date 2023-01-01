import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loadMoreIng: false,
  loadMoreText: '',
  page: 1,
  isFinished: false,

  page2: 1,
  page3: 1,
};

const pagination = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    setLoadMoreIng: (state, action) => {
      state.loadMoreIng = action.payload.loadMoreIng;
    },
    setLoadMoreText: (state, action) => {
      state.loadMoreText = action.payload.loadMoreText;
    },
    addPage: (state, action) => {
      const page = state.page;
      state.page = page + 1;
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
    setIsFinished: (state, action) => {
      state.isFinished = action.payload.isFinished;
    },
    resetState: (state, action) => {
      state.page = 1;
      state.isFinished = false;
    },
    setPage2: (state, action) => {
      state.page2 = action.payload.page2;
    },
    setPage3: (state, action) => {
      state.page3 = action.payload.page3;
    },
  },
});

export default pagination;
