import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { any, bool, func } from 'prop-types';
import colors from '../objects/colors';
import ActivatableImage from '../components/ActivatableImage';

const Tag = ({ children, selected, onPress, style }) => {
  const styles = StyleSheet.create({
    tag: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      width: 145,
      height: 40,

      backgroundColor: selected ? colors.selectedTagBackground : colors.unselectedTagBackground,
      borderRadius: 3,

      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 5,
      shadowOpacity: 0.10,

      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    text: {
      color: selected ? colors.selectedTagText : colors.unselectedTagText,
      fontFamily: 'calibre-medium',
      fontSize: 18,
      textAlign: 'center',
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.tag, style]}>
      <ActivatableImage icon={children} active={selected} />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

Tag.propTypes = {
  children: any.isRequired,
  onPress: func.isRequired,
  selected: bool.isRequired,
  style: any.isRequired,
};

Tag.defaultProps = {
  selected: false,
  style: {},
};

export default Tag;
