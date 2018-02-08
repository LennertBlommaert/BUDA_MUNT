import React from 'react';
import { StyleSheet, WebView, Dimensions } from 'react-native';
import { string } from 'prop-types';

import colors from '../objects/colors';

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    marginTop: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    backgroundColor: colors.headerBackground,
  },
});

const Pay = ({ screen }) => (
  <WebView
    source={{ uri: `https://invis.io/${screen}` }}
    style={styles.webView}
  />
);

Pay.propTypes = {
  screen: string,
};

Pay.defaultProps = {
  screen: 'https://invis.io/5QFRDNYXKWD',
};

export default Pay;
