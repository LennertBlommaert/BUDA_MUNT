import React from 'react';
import { Text } from 'react-native';
import { object } from 'prop-types';
import Screen from '../../components/Screen';

const PostDemand = ({ navigation }) => (
  <Screen navigation={navigation}>
    <Text>PostProject</Text>
  </Screen>
);

PostDemand.propTypes = {
  navigation: object.isRequired,
};

export default PostDemand;
