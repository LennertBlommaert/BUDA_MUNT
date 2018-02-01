import React from 'react';
import { View, Text } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';

const CapacitiesSelection = ({ capacities }) => (
  <View>
    {
      console.warn(capacities)
    }
    {

      capacities.map(c => <Text>{c.name}</Text>)

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
