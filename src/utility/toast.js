import Toast from 'react-native-simple-toast';

export const showToast = text => {
  Toast.showWithGravity(text, Toast.SHORT, Toast.CENTER);
};
