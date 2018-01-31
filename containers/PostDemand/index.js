import React from 'react';
import { Text, View } from 'react-native';
import { object } from 'prop-types';
import TitleInput from './TitleInput';
import DescInput from './DescInput';
import PostDemandButton from './PostDemandButton';
import Reward from './Reward/';
import CategoriesSelection from './CategoriesSelection/';

const PostDemand = ({ navigation }) => (
  <View>
    <Text>PostDemand</Text>
    <TitleInput />
    <DescInput />
    <Reward />
    <CategoriesSelection />
    <PostDemandButton navigation={navigation} />
  </View>
);

PostDemand.propTypes = {
  navigation: object.isRequired,
};

export default PostDemand;
