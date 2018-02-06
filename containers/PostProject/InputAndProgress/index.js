import React from 'react';
import { StyleSheet, View } from 'react-native';
import Inputs from './Inputs';
import ProgressBar from './ProgressBar';
import InputsNavigator from './InputsNavigator/';

const styles = StyleSheet.create({
  progressContainer: {
    alignSelf: 'stretch',
  },
  inputsAndProgressContainer: {
    // flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingBottom: 225,
  },
});

const InputAndProgress = () => (
  <View style={styles.inputsAndProgressContainer}>
    <Inputs />
    <View style={styles.progressContainer}>
      <InputsNavigator />
      <ProgressBar />
    </View>
  </View>
);

InputAndProgress.propTypes = {};

export default InputAndProgress;
