/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Orientation from 'react-native-orientation-locker';

AppRegistry.registerRunnable(appName, async initialProps => {
    const App = require('./App').default;
    try {
      Orientation.lockToPortrait();
      AppRegistry.registerComponent(appName, () => App);
      AppRegistry.runApplication(appName, initialProps);
    } catch (err) {
      console.log(err);
      AppRegistry.registerComponent(appName, () => App);
      AppRegistry.runApplication(appName, initialProps);
    }
  });
