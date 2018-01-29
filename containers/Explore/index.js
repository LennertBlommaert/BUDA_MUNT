/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';

import NoDemands from './NoDemands';
import DemandList from './DemandList';
import styles from '../../objects/styles';

import NoProjects from './NoProjects';
import ProjectList from './ProjectList';
import NavigateToPostDemandButton from './NavigateToPostDemandButton';

const Explore = ({ demands, projects, navigation }) => (
  <View style={styles.explore}>
    <NavigateToPostDemandButton navigation={navigation} />
    {
      projects.length > 0 ? <ProjectList /> : <NoProjects />
    }
    {
      demands.length > 0 ? <DemandList /> : <NoDemands />
    }
  </View>
);

Explore.propTypes = {
  demands: PropTypes.observableArray.isRequired,
  projects: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({
    demands: store.demands,
    projects: store.projects,
  }),
)(
  observer(Explore),
);
