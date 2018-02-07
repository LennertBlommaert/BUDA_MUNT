import React from 'react';
import { string, func } from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';
import Tile from '../../../components/Tile';
import VotesIndicator from './VotesIndicator';
import TileButton from './TileButton';
import Stage from './Stage.js';

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  headerText: {
    marginBottom: 15,
  },
  descText: {
  },
});

const ProjectTile = ({ uid, name, truncatedDesc, stage, navigation, setCurrentProjectDetailUID, votes }) => {
  const onPressProjectTileTextContainer = () => {
    setCurrentProjectDetailUID(uid);
    navigation.navigate('ProjectDetail');
  };

  const onPressVoteButton = () => {
    console.warn('Voted');
  };

  return (
    <Tile>
      <TouchableOpacity style={styles.textContainer} onPress={onPressProjectTileTextContainer}>
        <Stage />
        <HeaderText style={styles.headerText}>{name}</HeaderText>
        <BodyText style={styles.descText}>{truncatedDesc}</BodyText>
        <VotesIndicator votes={votes} />
      </TouchableOpacity>
      <TileButton onPress={onPressVoteButton} />
    </Tile>
  );
};

ProjectTile.propTypes = {
  name: string.isRequired,
  stage: string.isRequired,
  uid: string.isRequired,
  truncatedDesc: string.isRequired,
  setCurrentProjectDetailUID: func.isRequired,
};

export default inject(
  ({ store }) => ({
    setCurrentProjectDetailUID: store.setCurrentProjectDetailUID,
    maxProjectVotes: store.maxProjectVotes,
  }),
)(
  observer(ProjectTile),
);
