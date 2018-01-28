/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import NoProjects from './NoProjects';
import ProjectList from './ProjectList';
import styles from '../../objects/styles';

const Neighbourhood = ({projects}) => (
  <View style={styles.container}>
    {

      projects.length > 0 ?

      <ProjectList />

      : <NoProjects />
    }
  </View>
);

Neighbourhood.propTypes = {};

export default inject(
  ({store}) => {
    return {projects: store.projects};
  }
)(
  observer(Neighbourhood)
);
