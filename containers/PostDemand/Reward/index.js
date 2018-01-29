import React from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';
import RewardSlider from './RewardSlider';

const Reward = ({ minReward, maxReward, reward }) => (
  <View>
    <Text>{minReward}</Text>
    <Text>{reward}</Text>
    <Text>{maxReward}</Text>
    <RewardSlider
      minReward={minReward}
      maxReward={maxReward}
      reward={reward}
    />
  </View>
);

Reward.propTypes = {
  minReward: number.isRequired,
  maxReward: number.isRequired,
  reward: number.isRequired,
};

export default inject(
  ({ store }) => ({
    minReward: store.minReward,
    maxReward: store.maxReward,
    reward: store.reward,
  }),
)(
  observer(Reward),
);
