import React from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object } from 'prop-types';

import HeaderText from '../../components/HeaderText';
import BodyText from '../../components/BodyText';
import PriceText from '../../components/PriceText';

import AcceptDemandButton from '../../components/AcceptDemandButton';

const DemandDetail = ({ currentDemandDetail }) => (
  <View>
    <HeaderText>{currentDemandDetail.name}</HeaderText>
    <BodyText>{currentDemandDetail.desc}</BodyText>
    <PriceText>{currentDemandDetail.reward}</PriceText>
    <AcceptDemandButton />
  </View>
);

DemandDetail.propTypes = {
  currentDemandDetail: object.isRequired,
};

export default inject(
  ({ store }) => ({ currentDemandDetail: store.currentDemandDetail }),
)(
  observer(DemandDetail),
);
