import React from 'react';
import { FlatList } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import DemandTile from './DemandTile';

const DemandList = ({ demands }) => (
  <FlatList
    data={demands}
    keyExtractor={item => item.uid}
    renderItem={({ item }) => <DemandTile key={item.uid} {...item} />}
  />
);

DemandList.propTypes = {
  demands: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ demands: store.demands }),
)(
  observer(DemandList),
);
