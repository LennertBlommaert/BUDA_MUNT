import React from 'react';
import { View, StyleSheet } from 'react-native';
import PreviousInputButton from './PreviousInputButton';
import NextInputButton from './NextInputButton';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const InputsNavigator = () => (
  <View style={styles.container}>
    <PreviousInputButton />
    <NextInputButton />
  </View>
);

InputsNavigator.propTypes = {};

export default InputsNavigator;
