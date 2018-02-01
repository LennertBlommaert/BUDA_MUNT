// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { any, bool } from 'prop-types';
import colors from '../objects/colors';

const ButtonText = ({ children, italic, size }) => {
  const styles = StyleSheet.create({
    buttonText: {
      color: colors.buttonText,
      fontFamily: `calibre-medium${italic ? '-italic' : ''}`,
      fontSize: 20,
    },
  });

  return <Text style={styles.buttonText}>{children}</Text>;
};

ButtonText.propTypes = {
  children: any.isRequired,
  italic: bool,
};

ButtonText.defaultProps = {
  italic: false,
};

export default ButtonText;
