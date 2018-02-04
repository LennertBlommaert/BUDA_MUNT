/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-did-mount-set-state */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'mobx-react/native';
import { Font } from 'expo';

import CalibreMedium from './assets/fonts/Calibre_Medium.otf';
import CalibreMediumItalic from './assets/fonts/Calibre_Medium_Italic.otf';
import CalibreRegular from './assets/fonts/Calibre_Regular.otf';
import CalibreRegularItalic from './assets/fonts/Calibre_Regular_Italic.otf';

import Router from './components/Router';

import stores from './stores';

class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'calibre-medium': CalibreMedium,
      'calibre-medium-italic': CalibreMediumItalic,
      'calibre-regular': CalibreRegular,
      'calibre-regular-italic': CalibreRegularItalic,
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
