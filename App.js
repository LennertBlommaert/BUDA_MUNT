/* eslint-disable global-require */
/* eslint-disable react/self-closing-comp */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'mobx-react/native';
import { Font } from 'expo';

import Router from './components/Router';

import stores from './stores';

class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'calibre-bold': require('./assets/fonts/Calibre_Bold.otf'),
      'calibre-medium': require('./assets/fonts/Calibre_Medium.otf'),
      'calibre-medium-italic': require('./assets/fonts/Calibre_Medium_Italic.otf'),
      'calibre-regular': require('./assets/fonts/Calibre_Regular.otf'),
      'calibre-regular-italic': require('./assets/fonts/Calibre_Regular_Italic.otf'),
    });

    this.setState({ fontLoaded: true }); // eslint-disable-line react/no-did-mount-set-state
  }

  render() {
    return (
      <Provider {...stores}>
        { this.state.fontLoaded ? <Router /> : <View></View> }
      </Provider>
    );
  }
}

export default App;
