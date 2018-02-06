import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import { array } from 'prop-types';
import Tag from '../../../../components/Tag';
import BodyText from '../../../../components/BodyText';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
  },
  text: {
  },
});

const Capacities = ({ selectedCapacities }) => {
  const onPressTag = ({ name }) => {
    console.warn(`filter on tag ${name}`);
  };

  return (
    <View style={styles.container}>
      {/* {
        selectedCapacities.map(c => <Tag onPress={() => onPressTag(c)} selected={c.selected} key={c.uid}>{c.name}</Tag>)
      } */}
      {
        selectedCapacities.length > 0 ?
          <Tag
            style={styles.tag}
            onPress={() => onPressTag(selectedCapacities[0])}
            selected={selectedCapacities[0].selected}
            key={selectedCapacities[0].uid}
          >
            {selectedCapacities[0].name}
          </Tag>
          :
          null
      }
      {
        selectedCapacities.length > 1 ? <BodyText opacity={0.7} styles={styles.text} italic> +{selectedCapacities.length - 1}</BodyText> : null
      }
    </View>
  );
};

Capacities.propTypes = {
  selectedCapacities: array.isRequired,
};

export default inject(
  ({ store }) => ({ selectedCapacities: store.selectedCapacities }),
)(
  observer(Capacities),
);
