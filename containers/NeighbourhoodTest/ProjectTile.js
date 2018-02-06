import React from 'react';
import { Text, View } from 'react-native';
import { string } from 'prop-types';

const ProjectTile = ({ name, desc }) => (
  <View>
    <Text>{name}</Text>
    <Text>{desc}</Text>
  </View>
);

ProjectTile.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
};

export default ProjectTile;
