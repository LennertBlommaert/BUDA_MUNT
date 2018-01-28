import React from 'react';
import { Text, FlatList } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import styles from '../../objects/styles';

const DemandList = ({ demands }) => (
  <FlatList
    style={styles.container}
    data={demands}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <Text key={item.id}>{item.firstName}</Text>}
  />
);

DemandList.propTypes = {};

export default inject(
  ({ store }) => ({ demands: store.demands }),
)(
  observer(DemandList),
);
