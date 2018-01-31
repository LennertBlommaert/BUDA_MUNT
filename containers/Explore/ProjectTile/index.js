import React from 'react';
import { string } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';
import Tile from '../../../components/Tile';

const ProjectTile = ({ name, desc }) => {
  const onPressProjectTileTextContainer = () => {};

  return (
    <Tile>
      <TouchableOpacity onPress={onPressProjectTileTextContainer}>
        <HeaderText>{name}</HeaderText>
        <BodyText>{desc}</BodyText>
      </TouchableOpacity>
    </Tile>
  );
};

ProjectTile.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
};

export default ProjectTile;
