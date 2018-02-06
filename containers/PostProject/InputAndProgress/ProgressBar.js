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
    width: 150,
    height: 5,
    backgroundColor: colors.progressInActive,
    borderRadius: 3,
  },
  lineActive: {
    width: 150,
    height: 5,
    backgroundColor: colors.progressActive,
    borderRadius: 3,
  },
});

const ProgressBar = ({ currentInputIndexPostProject }) => (
  <View style={styles.container}>
    <View style={currentInputIndexPostProject >= 0 ? styles.lineActive : styles.line}></View>
    <View style={currentInputIndexPostProject >= 1 ? styles.lineActive : styles.line}></View>
  </View>
);

ProgressBar.propTypes = {
  currentInputIndexPostProject: number.isRequired,
};

export default inject(
  ({ store }) => ({ currentInputIndexPostProject: store.currentInputIndexPostProject }),
)(
  observer(ProgressBar),
);
