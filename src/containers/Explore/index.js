/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import NoDemands from './NoDemands';
import DemandList from './DemandList';
import styles from '../../objects/styles';

const Explore = ({demands}) => (
  <View style={styles.container}>
    {

      demands.length > 0 ?

      <DemandList />

      : <NoDemands />
    }
  </View>
);

Explore.propTypes = {};

export default inject(
  ({store}) => {
    return {demands: store.demands};
  }
)(
  observer(Explore)
);
