import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { any, bool } from 'prop-types';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'calibre-regular',
    fontSize: 20,
  },
  textActive: {
    fontFamily: 'calibre-medium',
  },
  textInactive: {
    opacity: 0.7,
  },
});

const SegmentedControlItem = ({ children, active }) => {
  const onPress = () => {
    console.warn(`Filter ${children}`);
  }

  return (
    <TouchableOpacity onPres={onPress}>
      <Text style={[styles.text, active ? styles.textActive : styles.textInactive]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

SegmentedControlItem.propTypes = {
  children: any.isRequired,
  active: bool.isRequired,
};

SegmentedControlItem.defaultProps = {
  active: false,
};

export default SegmentedControlItem;
