import React from 'react';
import { StyleSheet, WebView, Dimensions } from 'react-native';
import { string, any } from 'prop-types';

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

const InvisionWebView = ({ screen, style }) => (
  <WebView
    source={{ uri: `https://invis.io/${screen}` }}
    style={[styles.webView, style]}
  />
);

InvisionWebView.propTypes = {
  screen: string,
  style: any,
};

InvisionWebView.defaultProps = {
  screen: 'SQFTXXX3WDY',
  style: {},
};

export default InvisionWebView;
