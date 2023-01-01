import {viewStatus} from '../reducers/viewStatus';

export const StatusType = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  EMPTY: 'EMPTY',
  ERROR: 'ERROR',
  INFO: 'INFO',
  NETWORK_ERROR: 'NETWORK_ERROR',
};

export const setBusy = busy =>
  viewStatus.actions.setViewStatus({
    viewStatus: busy ? {state: StatusType.LOADING} : {state: StatusType.IDLE},
  });

export const setEmpty = empty =>
  viewStatus.actions.setViewStatus({
    viewStatus: {state: StatusType.EMPTY, message: empty},
  });

export const setError = error =>
  viewStatus.actions.setViewStatus({
    viewStatus: {state: StatusType.ERROR, message: error},
  });

export const setInfo = info =>
  viewStatus.actions.setViewStatus({
    viewStatus: {state: StatusType.INFO, message: info},
  });

export const setNetworkError = networkErr =>
  viewStatus.actions.setViewStatus({
    viewStatus: networkErr
      ? {state: StatusType.NETWORK_ERROR, message: '网络错误'}
      : {state: StatusType.IDLE},
  });
