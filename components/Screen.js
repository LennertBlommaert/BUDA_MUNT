import React from 'react';
import { View, StyleSheet } from 'react-native';
import { any } from 'prop-types';
import colors from '../objects/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const Sreen = ({ children }) => (
  <View style={styles.screen}>{children}</View>
);

Sreen.propTypes = {
  children: any.isRequired,
};

export default Sreen;
