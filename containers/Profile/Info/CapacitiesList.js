import React from 'react';
import { ScrollView } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import Tag from '../../../components/Tag';

const CapacitiesList = ({ user }) => {
  const onPressTag = name => console.warn(`Filter on ${name}`);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        user.capacities.map(c => <Tag onPress={() => onPressTag(c.name)} key={c.uid}>{c.name}</Tag>)
      }
    </ScrollView>
  );
};

CapacitiesList.propTypes = {
  user: PropTypes.observableObject.isRequired,
};

export default inject(
  ({ store }) => ({ user: store.user }),
)(
  observer(CapacitiesList),
);
