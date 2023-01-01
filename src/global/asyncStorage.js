import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageKey = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

const storeAccessToken = async value => {
  try {
    await AsyncStorage.setItem(StorageKey.ACCESS_TOKEN, value);
    return true;
  } catch (e) {
    return false;
  }
};

const getAccessToken = async (defaultValue = '') => {
  try {
    const value = await AsyncStorage.getItem(StorageKey.ACCESS_TOKEN);
    if (value !== null) {
      return value;
    } else {
      return defaultValue;
    }
  } catch (e) {
    return defaultValue;
  }
};

export {storeAccessToken, getAccessToken};
