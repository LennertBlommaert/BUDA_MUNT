import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Router from './src/components/Router';

import {Provider} from 'mobx-react/native';

import stores from './src/stores';

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router />
      </Provider>
    );
  }
}
