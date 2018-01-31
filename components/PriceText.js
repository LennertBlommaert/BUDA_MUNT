// Style component for body plain body text

// Style component for headers
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { any } from 'prop-types';
import colors from '../objects/colors';

const PriceText = ({ children }) => {
  const styles = StyleSheet.create({
    bodyText: {
      color: colors.priceText,
      fontFamily: 'calibre-regular',
      fontSize: 18,
    },
  });

  return <Text style={styles.bodyText}>{children} -B-</Text>;
};

PriceText.propTypes = {
  children: any.isRequired,
};

export default PriceText;
