import React from 'react';
import { string } from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';
import Tile from '../../../components/Tile';

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});

const ProjectTile = ({ name, desc }) => {
  const onPressProjectTileTextContainer = () => {};

  return (
    <Tile>
      <TouchableOpacity style={styles.textContainer} onPress={onPressProjectTileTextContainer}>
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
