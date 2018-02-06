import React from 'react';
import { View, StyleSheet } from 'react-native';
import LimitReached from './LimitReached';
import RewardToTime from './RewardToTime';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const InputInfo = () => (
  <View style={styles.container}>
    <RewardToTime />
    <LimitReached />
  </View>
);

InputInfo.propTypes = {};

export default InputInfo;
