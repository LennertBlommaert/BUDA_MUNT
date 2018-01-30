import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { string, number, object, func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import HeaderText from '../../components/HeaderText';
import BodyText from '../../components/BodyText';

import AcceptDemandButton from '../../components/AcceptDemandButton';

const DemandTile = ({ uid, name, desc, reward, userId, navigation, setCurrentDemandDetailUID }) => {
  const onPressDemandTileTextContainer = () => {
    setCurrentDemandDetailUID(uid);
    navigation.navigate('DemandDetail');
  };

  return (
    <View>
      <TouchableOpacity onPress={onPressDemandTileTextContainer}>
        <HeaderText>{name}</HeaderText>
        <BodyText>{desc}</BodyText>
        <BodyText italic>{reward} bunten</BodyText>
      </TouchableOpacity>
      <AcceptDemandButton />
    </View>
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
