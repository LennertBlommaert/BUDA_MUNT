import React from 'react';
import { FlatList } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import ProjectTile from './ProjectTile';

const ProjectList = ({ projects }) => (
  <FlatList
    data={projects}
    keyExtractor={item => item.name}
    renderItem={({ item }) => <ProjectTile key={item.name} {...item} />}
  />
);

ProjectList.propTypes = {};

export default inject(
  ({ store }) => ({ projects: store.projects }),
)(
  observer(ProjectList),
);
