// Style component for headers
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { any, bool, number, string } from 'prop-types';
import colors from '../objects/colors';

const HeaderText = ({ color, children, italic, fontSize, style }) => {
  const styles = StyleSheet.create({
    bodyText: {
      color,
      fontFamily: `calibre-medium${italic ? '-italic' : ''}`,
      fontSize,
    },
  });

  return <Text style={[styles.bodyText, style]}>{children}</Text>;
};

HeaderText.propTypes = {
  children: any.isRequired,
  italic: bool.isRequired,
  fontSize: number.isRequired,
  style: any.isRequired,
  color: string,
};

HeaderText.defaultProps = {
  italic: false,
  fontSize: 24,
  style: {},
  color: colors.text,
};

export default HeaderText;
