import React from 'react';
import { Text, View } from 'react-native';
import TitleInput from './TitleInput';
import DescInput from './DescInput';
import PostDemandButton from './PostDemandButton';
import Reward from './Reward/';
import CategoriesSelection from './CategoriesSelection/';

const PostDemand = () => (
  <View>
    <Text>PostDemand</Text>
    <TitleInput />
    <DescInput />
    <Reward />
    <CategoriesSelection />
    <PostDemandButton />
  </View>
);

PostDemand.propTypes = {};

export default PostDemand;
