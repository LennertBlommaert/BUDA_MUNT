import React from 'react';
import { View, StyleSheet } from 'react-native';
import { any } from 'prop-types';
import colors from '../objects/colors';

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    backgroundColor: colors.tile,
    width: 335,
    padding: 20,
    marginBottom: 50,
    borderRadius: 5,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.13,
  },
});

const Tile = ({ children }) => (
  <View style={styles.tile}>{children}</View>
);

Tile.propTypes = {
  children: any.isRequired,
};

export default Tile;
