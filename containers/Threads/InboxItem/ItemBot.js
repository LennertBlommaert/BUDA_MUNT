import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string } from 'prop-types';
import BodyText from '../../../components/BodyText';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const ItemBot = ({ lastMessagepayLoad, time }) => (
  <View style={styles.container}>
    <BodyText fontSize={18} italic>{lastMessagepayLoad}</BodyText>
    <BodyText italic opacity={0.7}>{time}</BodyText>
  </View>
);

ItemBot.propTypes = {
  lastMessagepayLoad: string.isRequired,
  time: string.isRequired,
};

export default ItemBot;
