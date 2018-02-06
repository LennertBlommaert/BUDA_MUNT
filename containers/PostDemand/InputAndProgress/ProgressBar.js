/* eslint-disable react/self-closing-comp */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  line: {
    width: 80,
    height: 5,
    backgroundColor: colors.progressInActive,
    borderRadius: 3,
  },
  lineActive: {
    width: 80,
    height: 5,
    backgroundColor: colors.progressActive,
    borderRadius: 3,
  },
});

const ProgressBar = ({ currentInputIndex }) => (
  <View style={styles.container}>
    <View style={currentInputIndex >= 0 ? styles.lineActive : styles.line}></View>
    <View style={currentInputIndex >= 1 ? styles.lineActive : styles.line}></View>
    <View style={currentInputIndex >= 2 ? styles.lineActive : styles.line}></View>
    <View style={currentInputIndex >= 3 ? styles.lineActive : styles.line}></View>
  </View>
);

ProgressBar.propTypes = {
  currentInputIndex: number.isRequired,
};

export default inject(
  ({ store }) => ({ currentInputIndex: store.currentInputIndex }),
)(
  observer(ProgressBar),
);
