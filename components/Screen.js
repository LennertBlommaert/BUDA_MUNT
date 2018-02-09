import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { any, object, bool } from 'prop-types';
import colors from '../objects/colors';
import clouds from '../assets/img/clouds.png';
import Header from './Header';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clouds: {
    position: 'absolute',
    zIndex: -100,
    top: 60,
  },
});

const Screen = ({ children, navigation, noHeader, backButton, style }) => (
  <View style={[styles.screen, style]}>
    { noHeader ? null : <Header backButton={backButton} navigation={navigation} /> }
    { children }
    <Image
      source={clouds}
      style={styles.clouds}
      resizeMode="repeat"
    />
  </View>
);

Screen.propTypes = {
  children: any.isRequired,
  navigation: object,
  noHeader: bool.isRequired,
  backButton: bool.isRequired,
  style: any,
};

Screen.defaultProps = {
  noHeader: false,
  backButton: false,
  navigation: {},
  style: {},
};

export default Screen;
