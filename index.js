/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';
const store = configureStore();
const RNRedux = () => (
  <Provider store={store}>
    <App /> 
  </Provider>
);
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
AppRegistry.registerComponent(appName, () => RNRedux);
