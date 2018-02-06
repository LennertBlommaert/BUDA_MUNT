import React from 'react';
import { Text } from 'react-native';
import { object } from 'prop-types';
import Screen from '../../components/Screen';

const Neighbourhood = ({ navigation }) => (
  <Screen navigation={navigation}>
    <Text>POI</Text>
  </Screen>
);

Neighbourhood.propTypes = {
  navigation: object.isRequired,
};

export default Neighbourhood;
