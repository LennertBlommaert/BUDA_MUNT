import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { object } from 'prop-types';
import { View, StyleSheet } from 'react-native';

import Screen from '../../components/Screen';
import PriceText from '../../components/PriceText';
import HeaderAndDescriptionDetail from '../../components/HeaderAndDescriptionDetail';
import PostDetailUserInfo from '../../components/PostDetailUserInfo';
import OtherUsersSuggestion from '../../components/OtherUsersSuggestion';

import Button from '../../components/Button';
import Tag from '../../components/Tag';

import colors from '../../objects/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  button: {
    position: 'absolute',
    bottom: 30,
  },
  extraInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.headerBackground,
    borderRadius: 3,
    width: 335,
    padding: 20,
    marginBottom: 30,
  },
  tag: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  priceText: {
    padding: 0,
    // flexDirection: 'column',
  },
});

const DemandDetail = ({ currentDemandDetail, navigation, acceptDemand, user }) => {
  const onPressAcceptDemand = () => {
    acceptDemand(currentDemandDetail.uid);
  };

  return (
    <Screen style={styles.container} backButton navigation={navigation}>
      <HeaderAndDescriptionDetail
        desc={currentDemandDetail.desc}
        name={currentDemandDetail.name}
      />
      <View style={styles.extraInfoContainer}>
        <View>
          {
            currentDemandDetail.capacities.map(c =>
              <Tag selected style={styles.tag} key={c.uid} onPress={() => console.warn(`Filter op: ${c.name}`)}>{c.name}</Tag>)
          }
        </View>
        <PriceText style={styles.priceText}>{currentDemandDetail.reward}</PriceText>
      </View>
      <PostDetailUserInfo currentPostDetail={currentDemandDetail} />
      {
        currentDemandDetail.user.uid === user.uid ?
          <OtherUsersSuggestion />
          :
          <Button
            icon={'acceptDemandDetail'}
            iconSize={18}
            style={styles.button}
            mainColor={colors.buttonPurpleStrong}
            secondaryColor={colors.buttonPurpleSoft}
            onPress={onPressAcceptDemand}
          >
            ik wil helpen
          </Button>
      }
    </Screen>
  );
};

DemandDetail.propTypes = {
  currentDemandDetail: object.isRequired,
  navigation: object.isRequired,
  user: object.isRequired,
};

export default inject(
  ({ store }) => ({
    currentDemandDetail: store.currentDemandDetail,
    acceptDemand: store.acceptDemand,
    user: store.user,
  }),
)(
  observer(DemandDetail),
);
