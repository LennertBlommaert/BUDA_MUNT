// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { any, bool, string } from 'prop-types';

const ButtonText = ({ children, italic, color }) => {
  const styles = StyleSheet.create({
    buttonText: {
      color,
      fontFamily: `calibre-medium${italic ? '-italic' : ''}`,
      fontSize: 20,
    },
  });

  return <Text style={styles.buttonText}>{children}</Text>;
};

ButtonText.propTypes = {
  children: any.isRequired,
  color: string.isRequired,
  italic: bool,
};

ButtonText.defaultProps = {
  italic: false,
};

export default ButtonText;
