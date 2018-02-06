import React from 'react';
import { inject, observer } from 'mobx-react/native';
import BodyText from '../../../../../components/BodyText';

const RewardToTime = ({ rewardToTime, reward }) => (
  <BodyText opacity={0.7} italic>
    { reward > 0 ? `Ongeveer ${rewardToTime} werk` : 'een minuut werk komt overeen met 1 beetje' }
  </BodyText>
);

RewardToTime.propTypes = {};

export default inject(
  ({ store }) => ({
    rewardToTime: store.rewardToTime,
    reward: store.reward,
  }),
)(
  observer(RewardToTime),
);
