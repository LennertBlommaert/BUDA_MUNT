import React from 'react';
import { StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';
import BodyText from '../../../../../components/BodyText';
import colors from '../../../../../objects/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.coinTextLimit,
  },
});

const LimitReached = ({ reward, maxReward }) => (
  <BodyText style={styles.text} italic>{ reward < maxReward ? ' ' : `${maxReward} beetjes is alles wat je hebt` }</BodyText>
);

LimitReached.propTypes = {
  reward: number.isRequired,
  maxReward: number.isRequired,
};

export default inject(
  ({ store }) => ({
    reward: store.reward,
    maxReward: store.maxReward,
  }),
)(
  observer(LimitReached),
);
