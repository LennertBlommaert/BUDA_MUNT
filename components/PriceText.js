// Style component for body plain body text

// Style component for headers
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { any, number, bool } from 'prop-types';
import colors from '../objects/colors';
import coin from '../assets/img/coin_gold.png';
import simpleCoin from '../assets/img/coin_gold_simple.png';

const PriceText = ({ children, fontSize, simpleCoinIcon }) => {
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
    coinImageSimple: {
      width: 11,
      height: 16,
      marginLeft: 3,
    },
  });

  return (
    <View style={styles.container}>
      {
        !simpleCoinIcon ?
          <Image
            style={styles.coinImage}
            source={coin}
          />
          :
          null
      }
      <Text style={styles.bodyText}>
        {children}
      </Text>
      {
        simpleCoinIcon ?
          <Image
            style={styles.coinImageSimple}
            source={simpleCoin}
          />
          :
          null
      }
    </View>
  );
};

PriceText.propTypes = {
  children: any.isRequired,
  fontSize: number.isRequired,
  simpleCoinIcon: bool,
};

PriceText.defaultProps = {
  fontSize: 30,
  simpleCoinIcon: false,
};

export default PriceText;
