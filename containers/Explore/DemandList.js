import React from 'react';
import { FlatList } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object } from 'prop-types';
import DemandTile from './DemandTile';

const DemandList = ({ demands, navigation }) => (
  <FlatList
    data={demands}
    keyExtractor={item => item.uid}
    renderItem={({ item }) =>
      <DemandTile key={item.uid} navigation={navigation} {...item} />
    }
  />
);

DemandList.propTypes = {
  demands: PropTypes.observableArray.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ demands: store.demands }),
)(
  observer(DemandList),
);
