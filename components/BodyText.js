// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { bool } from 'prop-types';
import colors from '../objects/colors';

const BodyText = ({ children, italic }) => {
  const styles = StyleSheet.create({
    bodyText: {
      color: colors.text,
      // fontFamily: `calibre-regular${italic ? '-italic' : ''}`,
      fontSize: 18,
    },
  });

  return <Text style={styles.bodyText}>{children}</Text>;
};

BodyText.propTypes = {
  italic: bool,
};

BodyText.defaultProps = {
  italic: false,
};

export default BodyText;
