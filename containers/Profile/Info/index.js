import React from 'react';
import { View } from 'react-native';
import CapacitiesList from './CapacitiesList';
import BucketList from './BucketList';

const Info = () => (
  <View>
    <CapacitiesList />
    <BucketList />
  </View>
);

Info.propTypes = {};

export default Info;
