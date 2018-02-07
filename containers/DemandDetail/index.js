import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { object } from 'prop-types';
import { View } from 'react-native';

import Screen from '../../components/Screen';
import HeaderText from '../../components/HeaderText';
import BodyText from '../../components/BodyText';
import PriceText from '../../components/PriceText';
import UserReference from '../../components/UserReference';

import Button from '../../components/Button';
import Tag from '../../components/Tag';

const DemandDetail = ({ currentDemandDetail, navigation }) => {
  const onPressAcceptDemand = () => {
    console.warn('Accepted demand');
  };

  return (
    <Screen backButton navigation={navigation}>
      <HeaderText>{currentDemandDetail.name}</HeaderText>
      <BodyText>{currentDemandDetail.desc}</BodyText>
      <PriceText>{currentDemandDetail.reward}</PriceText>
      <View>
        {
          currentDemandDetail.capacities.map(c => <Tag key={c.uid}>{c.name}</Tag>)
        }
      </View>
      <UserReference {...currentDemandDetail.user} />
      <Button onPress={onPressAcceptDemand}>
        ik wil helpen
      </Button>
    </Screen>
  );
};

DemandDetail.propTypes = {
  currentDemandDetail: object.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ currentDemandDetail: store.currentDemandDetail }),
)(
  observer(DemandDetail),
);
