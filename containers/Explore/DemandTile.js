import React from 'react';
import { Text, View } from 'react-native';
import { string } from 'prop-types';
import AcceptDemandButton from './AcceptDemandButton';

const DemandTile = ({ name, desc }) => (
  <View>
    <Text>{name}</Text>
    <Text>{desc}</Text>
    <AcceptDemandButton />
  </View>
);

DemandTile.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
};

export default DemandTile;