import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { func } from 'prop-types';
import Tag from '../../../components/Tag';
import HeaderText from '../../../components/HeaderText';
import BodyText from '../../../components/BodyText';

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  capacitiesContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const CapacitiesSelection = ({ capacities, toggleCapacitySelected }) => {
  const onPressTag = (capacity) => {
    toggleCapacitySelected(capacity.uid);
  };

  return (
    <View style={styles.container}>
      <HeaderText fontSize={22}>Zeg het in kernwoorden</HeaderText>
      <BodyText opacity={0.7} italic>Duid de passende tags aan</BodyText>
      <View style={styles.capacitiesContainer}>
        {
          capacities.map(c => <Tag onPress={() => onPressTag(c)} selected={c.selected} key={c.uid}>{c.name}</Tag>)
        }
      </View>
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
