import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { any, number, func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'calibre-regular',
    fontSize: 18,
    textAlign: 'center',
  },
  textActive: {
    fontFamily: 'calibre-medium',
  },
  textInactive: {
    opacity: 0.7,
  },
});

const SegmentedControlItem = ({ children, id, setCurrentSegmentedControlItemIndex, currentSegmentedControlItemIndex }) => {
  const onPress = () => {
    setCurrentSegmentedControlItemIndex(id);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.text, currentSegmentedControlItemIndex === id ? styles.textActive : styles.textInactive]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

SegmentedControlItem.propTypes = {
  id: number,
  children: any.isRequired,
  setCurrentSegmentedControlItemIndex: func.isRequired,
  currentSegmentedControlItemIndex: number,
};

SegmentedControlItem.defaultProps = {
  id: 0,
  currentSegmentedControlItemIndex: 0,
};

export default inject(
  ({ store }) => ({
    setCurrentSegmentedControlItemIndex: store.setCurrentSegmentedControlItemIndex,
    currentSegmentedControlItemIndex: store.currentSegmentedControlItemIndex,
  }),
)(
  observer(SegmentedControlItem),
);
