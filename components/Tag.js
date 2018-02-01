import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { any } from 'prop-types';
import colors from '../objects/colors';

const styles = StyleSheet.create({
  tag: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 3,
    textAlign: 'center',
    backgroundColor: colors.blueTagBackground,
    color: colors.blueTagText,
    fontFamily: 'calibre-medium',
    fontSize: 18,
  },
});

const Tag = ({ children }) => (
  <Text style={styles.tag}>{children}</Text>
);

Tag.propTypes = {
  children: any.isRequired,
};

export default Tag;
