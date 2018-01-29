import React from 'react';
import { Text, View } from 'react-native';
import TitleInput from './TitleInput';
import DescInput from './DescInput';
import PostDemandButton from './PostDemandButton';

const PostDemand = () => (
  <View>
    <Text>PostDemand</Text>
    <TitleInput />
    <DescInput />
    <PostDemandButton />
  </View>
);

PostDemand.propTypes = {};

export default PostDemand;
