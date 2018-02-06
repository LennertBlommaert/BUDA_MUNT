// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { any, bool, number } from 'prop-types';
import colors from '../objects/colors';

const BodyText = ({ children, italic, invertedColor, fontSize, opacity, style }) => {
  const styles = StyleSheet.create({
    bodyText: {
      color: invertedColor ? colors.textInverted : colors.text,
      fontFamily: `calibre-regular${italic ? '-italic' : ''}`,
      fontSize,
      opacity,
    },
  });

  return <Text style={[styles.bodyText, ...style]}>{children}</Text>;
};

BodyText.propTypes = {
  children: any.isRequired,
  italic: bool.isRequired,
  invertedColor: bool.isRequired,
  fontSize: number.isRequired,
  opacity: number.isRequired,
  style: any.isRequired,
};

BodyText.defaultProps = {
  italic: false,
  invertedColor: false,
  fontSize: 17,
  opacity: 1,
  style: [],
};

export default BodyText;
