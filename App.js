/* eslint-disable global-require */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-did-mount-set-state */

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
    // NOTE: font loading in create react native needs the use of requires
    await Font.loadAsync({
      'calibre-bold': require('./assets/fonts/Calibre_Bold.otf'),
      'calibre-medium': require('./assets/fonts/Calibre_Medium.otf'),
      'calibre-medium-italic': require('./assets/fonts/Calibre_Medium_Italic.otf'),
      'calibre-regular': require('./assets/fonts/Calibre_Regular.otf'),
      'calibre-regular-italic': require('./assets/fonts/Calibre_Regular_Italic.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Provider {...stores}>
        {
          // When font gets loaded (happens async) render the Router, else render an empty view
          this.state.fontLoaded ? <Router /> : <View></View>
        }
      </Provider>
    );
  }
}

export default App;
