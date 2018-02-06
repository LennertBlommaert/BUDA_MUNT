// Style component for body plain body text

// Style component for headers
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { any, number } from 'prop-types';
import colors from '../objects/colors';
import coin from '../assets/img/coin_gold.png';

const PriceText = ({ children, fontSize }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bodyText: {
      color: colors.priceText,
      fontFamily: 'calibre-medium',
      fontSize,
    },
    coinImage: {
      width: 29,
      height: 30,
      marginRight: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.coinImage}
        source={coin}
      />
      <Text style={styles.bodyText}>
        {children}
      </Text>
    </View>
  );
};

PriceText.propTypes = {
  children: any.isRequired,
  fontSize: number.isRequired,
};

PriceText.defaultProps = {
  fontSize: 30,
};

export default PriceText;
