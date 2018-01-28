import React from 'react';
import { Text, FlatList } from 'react-native';
import { inject, observer } from 'mobx-react/native';

const ProjectList = ({ projects }) => (
  <FlatList
    data={projects}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
  />
);

ProjectList.propTypes = {};

export default inject(
  ({ store }) => ({ projects: store.projects }),
)(
  observer(ProjectList),
);
