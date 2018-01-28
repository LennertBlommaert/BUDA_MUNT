import React from 'react';
import { Text, ScrollView } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';

const ProjectList = ({projects}) => {

  return (
    <ScrollView>
        {
          projects.sort(
              (a, b) => a.title - b.title
            ).map(
              p => (
                <Text key={p.key}>{p.title}</Text>
              )
            )
        }
    </ScrollView>
  );

};

ProjectList.propTypes = {
  projects: PropTypes.observableArray.isRequired
};

export default inject(
  ({store}) => {
    return {projects: store.projects};
  }
)(
  observer(ProjectList)
);
