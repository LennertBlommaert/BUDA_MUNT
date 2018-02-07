import React from 'react';
import { View, StyleSheet } from 'react-native';
import { any, object, bool } from 'prop-types';
import colors from '../objects/colors';
import Header from './Header';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const Screen = ({ children, navigation, noHeader, backButton }) => (
  <View style={styles.screen}>
    { noHeader ? null : <Header backButton={backButton} navigation={navigation} /> }
    { children }
  </View>
);

Screen.propTypes = {
  children: any.isRequired,
  navigation: object,
  noHeader: bool.isRequired,
  backButton: bool.isRequired,
};

Screen.defaultProps = {
  noHeader: false,
  backButton: false,
  navigation: {},
};

export default Screen;
