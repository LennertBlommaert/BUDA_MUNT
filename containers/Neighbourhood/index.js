/* eslint-disable react/jsx-filename-extension */

// NOTE: NOT IN USE

import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import NoProjects from './NoProjects';
import ProjectList from './ProjectList';
import PostDemandButton from './PostDemandButton';
import styles from '../../objects/styles';

const Neighbourhood = ({ projects, navigation }) => (
  <View style={styles.container}>
    <PostDemandButton navigation={navigation} />
    {
      projects.length > 0 ? <ProjectList /> : <NoProjects />
    }
  </View>
);

Neighbourhood.propTypes = {
  projects: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ projects: store.projects }),
)(
  observer(Neighbourhood),
);
