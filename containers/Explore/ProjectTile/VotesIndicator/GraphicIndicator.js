import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';
import ActivatableImage from '../../../../components/ActivatableImage';

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

const GraphicIndicator = ({ votes, maxProjectVotes }) => (
  <View style={styles.container}>
    <ActivatableImage icon={'projectVoteIndicator'} active={votes === 1} size={32} />
    <ActivatableImage icon={'projectVoteIndicator'} active={votes === 2} size={32} />
    <ActivatableImage icon={'projectVoteIndicator'} active={votes === 3} size={32} />
    <ActivatableImage icon={'projectVoteIndicator'} active={votes === 4} size={32} />
    <ActivatableImage icon={'projectVoteIndicator'} active={votes === 5} size={32} />
  </View>
);

GraphicIndicator.propTypes = {
  votes: number.isRequired,
  maxProjectVotes: number.isRequired,
};

export default inject(
  ({ store }) => ({
    maxProjectVotes: store.maxProjectVotes,
  }),
)(
  observer(GraphicIndicator),
);
