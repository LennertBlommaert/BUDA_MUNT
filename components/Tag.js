import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { any, bool, func } from 'prop-types';
import colors from '../objects/colors';

const Tag = ({ children, selected, onPress }) => {
  const styles = StyleSheet.create({
    tag: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 3,
      textAlign: 'center',
      backgroundColor: selected ? colors.selectedTagBackground : colors.unselectedTagBackground,
      color: selected ? colors.selectedTagText : colors.unselectedTagText,
      fontFamily: 'calibre-medium',
      fontSize: 18,
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.tag}>{children}</Text>
    </TouchableOpacity>
  );
};

Tag.propTypes = {
  children: any.isRequired,
  onPress: func.isRequired,
  selected: bool,
};

Tag.defaultProps = {
  selected: false,
};

export default Tag;
