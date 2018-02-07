import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/Screen';

const Notifications = ({ navigation }) => (
  <Screen backButton navigation={navigation}>
    <Text>Notifications</Text>
  </Screen>
);

Notifications.propTypes = {};

export default Notifications;
