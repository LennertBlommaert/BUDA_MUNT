/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View, Button } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import NoProjects from './NoProjects';
import ProjectList from './ProjectList';
import styles from '../../objects/styles';

const Neighbourhood = ({ projects }) => {
  const onPressPostDemand = () => {
    console.log('Post demand');
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={onPressPostDemand}
        title="plaats een zoekertje"
      />
      {
        projects.length > 0 ? <ProjectList /> : <NoProjects />
      }
    </View>
  );
};

Neighbourhood.propTypes = {
  projects: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ projects: store.projects }),
)(
  observer(Neighbourhood),
);
