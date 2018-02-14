import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';
import TitleInput from './TitleInput';
import DescInput from './DescInput';
import RewardInput from './RewardInput/';
import CapacitiesSelection from './CapacitiesSelection/';

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

const Inputs = ({ currentInputIndex }) => (
  <View style={styles.container}>
    {
      currentInputIndex === 0 ? <TitleInput /> : null
    }
    {
      currentInputIndex === 1 ? <DescInput /> : null
    }
    {
      currentInputIndex === 2 ? <RewardInput /> : null
    }
    {
      currentInputIndex === 3 ? <CapacitiesSelection /> : null
    }
  </View>
);

Inputs.propTypes = {
  currentInputIndex: number.isRequired,
};

export default inject(
  ({ store }) => ({ currentInputIndex: store.currentInputIndex }),
)(
  observer(Inputs),
);
