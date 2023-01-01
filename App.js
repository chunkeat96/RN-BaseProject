import React from 'react';
import {Provider} from 'react-redux';
import root from './src/redux/store';
import Route from './src/route';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={root}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFFFFF" />
      <Route />
    </Provider>
  );
};

export default App;
