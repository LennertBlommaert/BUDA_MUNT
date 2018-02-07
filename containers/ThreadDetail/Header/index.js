import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { TouchableOpacity } from 'react-native';
import { object, func } from 'prop-types';
import DemandName from './DemandName';
import OtherUserName from './OtherUserName';

const Header = ({ demand, otherUser, setCurrentDemandDetailUID, navigation }) => {
  const onPress = () => {
    setCurrentDemandDetailUID(demand.uid);
    navigation.navigate('DemandDetail');
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <DemandName {...demand} />
      <OtherUserName {...otherUser} />
    </TouchableOpacity>
  );
};

Header.propTypes = {
  demand: object.isRequired,
  otherUser: object.isRequired,
  navigation: object.isRequired,
  setCurrentDemandDetailUID: func.isRequired,
};

export default inject(
  ({ store }) => ({ setCurrentDemandDetailUID: store.setCurrentDemandDetailUID }),
)(
  observer(Header),
);
