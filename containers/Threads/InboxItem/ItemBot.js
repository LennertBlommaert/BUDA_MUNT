import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, bool } from 'prop-types';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const ItemBot = ({ lastMessageTruncatedPayLoad, time, containsUnreadMessages }) => (
  <View style={styles.container}>
    {
      containsUnreadMessages ?
        <HeaderText fontSize={18}>{lastMessageTruncatedPayLoad}</HeaderText>
        : <BodyText fontSize={18} italic>{lastMessageTruncatedPayLoad}</BodyText>
    }
    <BodyText italic opacity={0.7}>{time}</BodyText>
  </View>
);

ItemBot.propTypes = {
  lastMessageTruncatedPayLoad: string.isRequired,
  time: string.isRequired,
  containsUnreadMessages: bool.isRequired,
};

export default ItemBot;
