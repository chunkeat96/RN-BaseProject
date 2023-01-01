import pagination from '../reducers/pagination';

const setLoadMoreIng = loadMoreIng =>
  pagination.actions.setLoadMoreIng({loadMoreIng});

const setLoadMoreText = loadMoreText =>
  pagination.actions.setLoadMoreText({loadMoreText});

const addPage = () => pagination.actions.addPage();

const setPage = page => pagination.actions.setPage({page});

const setIsFinished = isFinished =>
  pagination.actions.setIsFinished({isFinished});

const resetPaginationState = () => pagination.actions.resetState();

const setPage2 = page2 => pagination.actions.setPage2({page2});

const setPage3 = page3 => pagination.actions.setPage3({page3});

export {
  setLoadMoreIng,
  setLoadMoreText,
  addPage,
  setPage,
  setIsFinished,
  resetPaginationState,
  setPage2,
  setPage3,
};
