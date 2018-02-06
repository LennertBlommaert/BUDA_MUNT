import React from 'react';
import { Text } from 'react-native';
import { object } from 'prop-types';
import Screen from '../../components/Screen';

const Pay = ({ navigation }) => (
  <Screen navigation={navigation}>
    <Text>Betalen</Text>
  </Screen>
);

Pay.propTypes = {
  navigation: object.isRequired,
};

export default Pay;
