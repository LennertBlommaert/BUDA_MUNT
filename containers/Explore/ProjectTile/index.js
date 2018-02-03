import React from 'react';
import { string, func } from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
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

const ProjectTile = ({ uid, name, desc, navigation, setCurrentProjectDetailUID }) => {
  const onPressProjectTileTextContainer = () => {
    setCurrentProjectDetailUID(uid);
    navigation.navigate('ProjectDetail');
  };

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
  uid: string.isRequired,
  desc: string.isRequired,
  setCurrentProjectDetailUID: func.isRequired,
};

export default inject(
  ({ store }) => ({ setCurrentProjectDetailUID: store.setCurrentProjectDetailUID }),
)(
  observer(ProjectTile),
);
