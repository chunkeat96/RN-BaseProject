import {NativeModules} from 'react-native';

const env = NativeModules.RNConfig?.env;

let Config = {};

if (env === 'dev') {
  Config.version = '1.0.0';
  Config.apiUrl = '';
} else {
  Config.version = '1.0.0';
  Config.apiUrl = '';
}

export default Config;
