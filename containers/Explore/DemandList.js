import React from 'react';
import { FlatList } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import DemandTile from './DemandTile';

const DemandList = ({ demands }) => (
  <FlatList
    data={demands}
    keyExtractor={item => item.name}
    renderItem={({ item }) => <DemandTile key={item.name} {...item} />}
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
