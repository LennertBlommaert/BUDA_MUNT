import React from 'react';
import { Text, View } from 'react-native';
import { string, number } from 'prop-types';
import AcceptDemandButton from './AcceptDemandButton';

const DemandTile = ({ name, desc, reward }) => (
  <View>
    <Text>{name}</Text>
    <Text>{desc}</Text>
    <Text>{reward} bunten</Text>
    <AcceptDemandButton />
  </View>
);

DemandTile.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
  reward: number.isRequired,
};

export default DemandTile;
