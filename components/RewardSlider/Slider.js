import React from 'react';
import { Slider } from 'react-native';
import { number, func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

const RewardSlider = ({ minReward, maxReward, setReward, reward }) => {
  const onValueChangeSlider = value => setReward(value);

  return (
    <Slider
      minimumValue={minReward}
      maximumValue={maxReward}
      value={reward}
      step={1}
      minimumTrackTintColor={'#7ed321'}
      onValueChange={value => onValueChangeSlider(value)}
    />
  );
};

RewardSlider.propTypes = {
  minReward: number.isRequired,
  maxReward: number.isRequired,
  reward: number.isRequired,
  setReward: func.isRequired,
};

export default inject(
  ({ store }) => ({
    setReward: store.setReward,
  }),
)(
  observer(RewardSlider),
);
