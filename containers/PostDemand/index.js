import React from 'react';
import { Text } from 'react-native';
import { object } from 'prop-types';
import TitleInput from './TitleInput';
import DescInput from './DescInput';
import PostDemandButton from './PostDemandButton';
import Reward from './Reward/';
import CapacitiesSelection from './CapacitiesSelection/';
import Screen from '../../components/Screen';

const PostDemand = ({ navigation }) => (
  <Screen>
    <Text>PostDemand</Text>
    <TitleInput />
    <DescInput />
    <Reward />
    <CapacitiesSelection />
    <PostDemandButton navigation={navigation} />
  </Screen>
);

PostDemand.propTypes = {
  navigation: object.isRequired,
};

export default PostDemand;
