import React from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object } from 'prop-types';

import HeaderText from '../../components/HeaderText';
import BodyText from '../../components/BodyText';
import PriceText from '../../components/PriceText';

import Button from '../../components/Button';

const DemandDetail = ({ currentDemandDetail }) => (
  <View>
    <HeaderText>{currentDemandDetail.name}</HeaderText>
    <BodyText>{currentDemandDetail.desc}</BodyText>
    <PriceText>{currentDemandDetail.reward}</PriceText>
    <Button>
      ik wil helpen
    </Button>
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
