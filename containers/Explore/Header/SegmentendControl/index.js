/* eslint-disable react/self-closing-comp */

import React from 'react';
import { number } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import SegmentedControlItem from './SegmentedControlItem';
import colors from '../../../../objects/colors';

const styles = StyleSheet.create({
  container: {
    width: 335,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  line: {
    width: 111,
    height: 3,
    borderRadius: 3,
    backgroundColor: colors.addDemandButtonBackground,
    transform: [{ translateY: 7 }, { translateX: -7 }],
  },
});

const SegmentedControl = ({ currentSegmentedControlItemIndex }) => (
  <View>
    <View style={styles.container}>
      <SegmentedControlItem id={0}>Alles</SegmentedControlItem>
      <SegmentedControlItem id={1}>Dromen</SegmentedControlItem>
      <SegmentedControlItem id={2}>Buurtwensen</SegmentedControlItem>
    </View>
    <View
      style={[styles.line, { transform: [{ translateY: 7 }, { translateX: 111 * currentSegmentedControlItemIndex }] }]}
    >
    </View>
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
