import React from 'react';
import { Text, View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import Tag from '../../components/Tag';

const Info = ({ user }) => {
  const onPressTag = name => console.warn(`Filter on ${name}`);

  return (
    <View>
      <Text>{user.firstName} {user.name}</Text>
      <Text>{user.email}</Text>
      <View>
        {
          user.capacities.map(c => <Tag onPress={() => onPressTag(c.name)} key={c.uid}>{c.name}</Tag>)
        }
      </View>
    </View>
  );
};

Info.propTypes = {
  user: PropTypes.observableObject.isRequired,
};

export default inject(
  ({ store }) => ({ user: store.user }),
)(
  observer(Info),
);
