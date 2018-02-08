import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { object, func } from 'prop-types';
import DemandName from './DemandName';
import OtherUserName from './OtherUserName';
import colors from '../../../objects/colors';
import arrow from '../../../assets/img/stroke_arrow_left.png';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: colors.headerBackground,
    zIndex: -10,
    flexDirection: 'row',
  },
  arrowImage: {
    width: 6,
    height: 12,
    // position: 'absolute',
    // right: 50,
  },
  textContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
});

const Header = ({ demand, otherUser, setCurrentDemandDetailUID, navigation }) => {
  const onPress = () => {
    setCurrentDemandDetailUID(demand.uid);
    navigation.navigate('DemandDetail');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <DemandName {...demand} />
        <OtherUserName {...otherUser} />
      </View>
      <Image
        style={styles.arrowImage}
        source={arrow}
        resizeMode={'stretch'}
      />
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
