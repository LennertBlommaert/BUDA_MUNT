// Style component for body plain body text

// Style component for headers
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { any } from 'prop-types';
import colors from '../objects/colors';
import coin from '../assets/img/coin.png';

const PriceText = ({ children }) => {
  const styles = StyleSheet.create({
    bodyText: {
      color: colors.priceText,
      fontFamily: 'calibre-regular',
      fontSize: 24,
    },
    coinImage: {
      width: 11,
      height: 16,
    },
  });

  return (
    <Text style={styles.bodyText}>
      {children}
      <Image
        style={styles.coinImage}
        source={coin}
      />
    </Text>
  );
};

PriceText.propTypes = {
  children: any.isRequired,
};

export default PriceText;
