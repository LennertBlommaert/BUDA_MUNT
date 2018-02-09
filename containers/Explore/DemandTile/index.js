import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { string, number, object, func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import HeaderText from '../../../components/HeaderText';
import BodyText from '../../../components/BodyText';
import PriceText from '../../../components/PriceText';
import Tile from '../../../components/Tile';
import TileButton from './TileButton';

import UserReference from '../../../components/UserReference';

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,
  },
  userAndPriceContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const DemandTile = ({ uid, name, truncatedDesc, reward, userId, user, navigation, setCurrentDemandDetailUID, acceptDemand }) => {
  const onPressDemandTileTextContainer = () => {
    setCurrentDemandDetailUID(uid);
    navigation.navigate('DemandDetail');
  };

  const onPressAcceptDemandButton = () => {
    acceptDemand(uid);
  };

  return (
    <Tile>
      <TouchableOpacity style={styles.textContainer} onPress={onPressDemandTileTextContainer}>
        <HeaderText>{name}</HeaderText>
        <BodyText>{truncatedDesc}</BodyText>
      </TouchableOpacity>
      <View style={styles.userAndPriceContainer}>
        <UserReference {...user} />
        <PriceText simpleCoinIcon>{reward}</PriceText>
      </View>
      <TileButton userName={user.firstName} demandTile icon={'acceptDemand'} onPress={onPressAcceptDemandButton} style={styles.button} />
    </Tile>
  );
};

DemandTile.propTypes = {
  name: string.isRequired,
  truncatedDesc: string.isRequired,
  reward: number.isRequired,
  navigation: object.isRequired,
  user: object.isRequired,
  setCurrentDemandDetailUID: func.isRequired,
  acceptDemand: func.isRequired,
};

export default inject(
  ({ store }) => ({
    setCurrentDemandDetailUID: store.setCurrentDemandDetailUID,
    acceptDemand: store.acceptDemand,
  }),
)(
  observer(DemandTile),
);
