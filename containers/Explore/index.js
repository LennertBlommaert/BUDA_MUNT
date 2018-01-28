/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import NoDemands from './NoDemands';
import DemandList from './DemandList';
import styles from '../../objects/styles';

const Explore = ({ demands }) => (
  <View style={styles.container}>
    {
      demands.length > 0 ? <DemandList /> : <NoDemands />
    }
  </View>
);

Explore.propTypes = {
  demands: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ demands: store.demands }),
)(
  observer(Explore),
);
