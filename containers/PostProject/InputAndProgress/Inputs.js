import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';
import TitleInput from './TitleInput';
import DescInput from './DescInput';

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

const Inputs = ({ currentInputIndexPostProject }) => (
  <View style={styles.container}>
    {/* <View> */}
    {
      currentInputIndexPostProject === 0 ? <TitleInput /> : null
    }
    {
      currentInputIndexPostProject === 1 ? <DescInput /> : null
    }
  </View>
);

Inputs.propTypes = {
  currentInputIndexPostProject: number.isRequired,
};

export default inject(
  ({ store }) => ({ currentInputIndexPostProject: store.currentInputIndexPostProject }),
)(
  observer(Inputs),
);
