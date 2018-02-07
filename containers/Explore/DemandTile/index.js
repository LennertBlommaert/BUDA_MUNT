import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { string, number, object, func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import HeaderText from '../../../components/HeaderText';
import BodyText from '../../../components/BodyText';
import PriceText from '../../../components/PriceText';
import Tile from '../../../components/Tile';

import Button from '../../../components/Button';
import UserReference from '../../../components/UserReference';

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,
  },
});

const DemandTile = ({ uid, name, desc, reward, userId, user, navigation, setCurrentDemandDetailUID }) => {
  const onPressDemandTileTextContainer = () => {
    setCurrentDemandDetailUID(uid);
    navigation.navigate('DemandDetail');
  };

  const onPressAcceptDemandButton = () => {
    console.warn('Accepeted demand');
  };

  return (
    <Tile>
      <TouchableOpacity style={styles.textContainer} onPress={onPressDemandTileTextContainer}>
        <HeaderText>{name}</HeaderText>
        <BodyText>{desc}</BodyText>
        <PriceText>{reward}</PriceText>
      </TouchableOpacity>
      <UserReference {...user} />
      <Button onPress={onPressAcceptDemandButton} tileButton>ik wil helpen</Button>
    </Tile>
  );
};

DemandTile.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
  reward: number.isRequired,
  navigation: object.isRequired,
  user: object.isRequired,
  setCurrentDemandDetailUID: func.isRequired,
};

export default inject(
  ({ store }) => ({ setCurrentDemandDetailUID: store.setCurrentDemandDetailUID }),
)(
  observer(DemandTile),
);
