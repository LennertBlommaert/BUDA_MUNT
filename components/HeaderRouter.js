// NOTE: Not in use
// cannot use store properties in components for react-navigation

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ user }) => {
  const styles = StyleSheet.create({
    header: {
    },
  });

  return (
    <View style={styles.header}>
      <Text>{}</Text>
    </View>
  );
};

export default Header;
