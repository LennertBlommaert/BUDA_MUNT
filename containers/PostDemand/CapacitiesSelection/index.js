import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import Tag from '../../../components/Tag';

const CapacitiesSelection = ({ capacities }) => (
  <View>
    {
      capacities.map(c => <Tag key={c.uid}>{c.name}</Tag>)
    }
  </View>
);

CapacitiesSelection.propTypes = {
  capacities: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ capacities: store.capacities }),
)(
  observer(CapacitiesSelection),
);
