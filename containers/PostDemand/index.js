import React from 'react';
import { Text, View } from 'react-native';
import TitleInput from './TitleInput';
import DescInput from './DescInput';
import PostDemandButton from './PostDemandButton';
import Reward from './Reward/';

const PostDemand = () => (
  <View>
    <Text>PostDemand</Text>
    <TitleInput />
    <DescInput />
    <Reward />
    <PostDemandButton />
  </View>
);

PostDemand.propTypes = {};

export default PostDemand;
