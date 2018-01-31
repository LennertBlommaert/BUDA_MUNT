import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';

const ProjectTile = ({ name, desc }) => (
  <View>
    <HeaderText>{name}</HeaderText>
    <BodyText>{desc}</BodyText>
  </View>
);

ProjectTile.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
};

export default ProjectTile;
