import React from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';
import RewardSlider from './RewardSlider';

const Reward = ({ minReward, maxReward, reward }) => (
  <View>
    <Text>voor {reward} beetjes</Text>
    <View>
      <Text>{minReward}</Text>
      <RewardSlider
        minReward={minReward}
        maxReward={maxReward}
        reward={reward}
      />
      <Text>{maxReward}</Text>
    </View>
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
