import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';
import ActivatableImage from '../ActivatableImage';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 18,
  },
});

const GraphicIndicator = ({ votes, maxProjectVotes, coinIconSize }) => (
  <View style={styles.container}>
    <ActivatableImage icon={'projectVoteIndicator'} active={votes >= 1} size={coinIconSize} />
    <ActivatableImage icon={'projectVoteIndicator'} active={votes >= 2} size={coinIconSize} />
    <ActivatableImage icon={'projectVoteIndicator'} active={votes >= 3} size={coinIconSize} />
    <ActivatableImage icon={'projectVoteIndicator'} active={votes >= 4} size={coinIconSize} />
    <ActivatableImage icon={'projectVoteIndicator'} active={votes >= 5} size={coinIconSize} />
  </View>
);

GraphicIndicator.propTypes = {
  votes: number.isRequired,
  maxProjectVotes: number.isRequired,
  coinIconSize: number,
};

GraphicIndicator.defaultProps = {
  coinIconSize: 32,
};

export default inject(
  ({ store }) => ({
    maxProjectVotes: store.maxProjectVotes,
  }),
)(
  observer(GraphicIndicator),
);
