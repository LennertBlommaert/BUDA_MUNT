// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { any, bool } from 'prop-types';
import colors from '../objects/colors';

const BodyText = ({ children, italic, invertedColor, size }) => {
  const styles = StyleSheet.create({
    bodyText: {
      color: invertedColor ? colors.textInverted : colors.text,
      fontFamily: `calibre-regular${italic ? '-italic' : ''}`,
      fontSize: 17,
    },
  });

  return <Text style={styles.bodyText}>{children}</Text>;
};

BodyText.propTypes = {
  children: any.isRequired,
  italic: bool,
  invertedColor: bool,
};

BodyText.defaultProps = {
  italic: false,
  invertedColor: false,
};

export default BodyText;
