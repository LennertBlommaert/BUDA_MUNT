// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { any, bool } from 'prop-types';
import colors from '../objects/colors';

const HeaderText = ({ children, italic }) => {
  const styles = StyleSheet.create({
    bodyText: {
      color: colors.text,
      fontFamily: `calibre-regular${italic ? '-italic' : ''}`,
      fontSize: 17,
    },
  });

  return <Text style={styles.bodyText}>{children}</Text>;
};

HeaderText.propTypes = {
  children: any.isRequired,
  italic: bool,
};

HeaderText.defaultProps = {
  italic: false,
};

export default HeaderText;
