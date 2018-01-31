import React from 'react';
import { TouchableOpacity } from 'react-native';
import { string, number, object, func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import HeaderText from '../../../components/HeaderText';
import BodyText from '../../../components/BodyText';
import PriceText from '../../../components/PriceText';
import Tile from '../../../components/Tile';

import AcceptDemandButton from './AcceptDemandButton';

const DemandTile = ({ uid, name, desc, reward, userId, navigation, setCurrentDemandDetailUID }) => {
  const onPressDemandTileTextContainer = () => {
    setCurrentDemandDetailUID(uid);
    navigation.navigate('DemandDetail');
  };

  return (
    <Tile>
      <TouchableOpacity onPress={onPressDemandTileTextContainer}>
        <HeaderText>{name}</HeaderText>
        <BodyText>{desc}</BodyText>
        <PriceText>{reward}</PriceText>
      </TouchableOpacity>
      <AcceptDemandButton navigation={navigation} />
    </Tile>
  );
};

DemandTile.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
  reward: number.isRequired,
  navigation: object.isRequired,
  setCurrentDemandDetailUID: func.isRequired,
};

export default inject(
  ({ store }) => ({ setCurrentDemandDetailUID: store.setCurrentDemandDetailUID }),
)(
  observer(DemandTile),
);
