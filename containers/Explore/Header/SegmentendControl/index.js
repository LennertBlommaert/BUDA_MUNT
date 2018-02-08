import React from 'react';
import { View, StyleSheet } from 'react-native';
import SegmentedControlItem from './SegmentedControlItem';

const styles = StyleSheet.create({
  container: {
    width: 335,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

const SegmentedControl = () => (
  <View style={styles.container}>
    <SegmentedControlItem>Alles</SegmentedControlItem>
    <SegmentedControlItem>Dromen</SegmentedControlItem>
    <SegmentedControlItem>Buurtwensen</SegmentedControlItem>
  </View>
);

SegmentedControl.propTypes = {};

export default SegmentedControl;
