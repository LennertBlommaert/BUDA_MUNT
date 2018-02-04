import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { func } from 'prop-types';
import Tag from '../../../components/Tag';

const CapacitiesSelection = ({ capacities, toggleCapacitySelected }) => {
  const onPressTag = (capacity) => {
    toggleCapacitySelected(capacity.uid);
  };

  return (
    <View>
      {
        capacities.map(c => <Tag onPress={() => onPressTag(c)} selected={c.selected} key={c.uid}>{c.name}</Tag>)
      }
    </View>
  );
};

CapacitiesSelection.propTypes = {
  capacities: PropTypes.observableArray.isRequired,
  toggleCapacitySelected: func.isRequired,
};

export default inject(
  ({ store }) => ({
    capacities: store.capacities,
    toggleCapacitySelected: store.toggleCapacitySelected,
  }),
)(
  observer(CapacitiesSelection),
);
