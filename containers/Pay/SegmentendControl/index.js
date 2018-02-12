/* eslint-disable react/self-closing-comp */

import React from 'react';
import { number } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import SegmentedControlItem from './SegmentedControlItem';
import ActiveSegmentIndicator from './ActiveSegmentIndicator';

const styles = StyleSheet.create({
  container: {
    width: 335,
    marginTop: 30,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

const SegmentedControl = ({ currentSegmentedControlItemIndex }) => (
  <View>
    <View style={styles.container}>
      <SegmentedControlItem id={0}>Betaal</SegmentedControlItem>
      <SegmentedControlItem id={1}>Ontvang</SegmentedControlItem>
    </View>
    <ActiveSegmentIndicator />
  </View>
);

SegmentedControl.propTypes = {
  currentSegmentedControlItemIndex: number.isRequired,
};

export default inject(
  ({ store }) => ({ currentSegmentedControlItemIndex: store.currentSegmentedControlItemIndex }),
)(
  observer(SegmentedControl),
);
