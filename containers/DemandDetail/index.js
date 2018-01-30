import React from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object } from 'prop-types';

import AcceptDemandButton from '../../components/AcceptDemandButton';

const DemandDetail = ({ currentDemandDetail }) => (
  <View>
    <Text>{currentDemandDetail.name}</Text>
    <Text>{currentDemandDetail.desc}</Text>
    <Text>{currentDemandDetail.reward} bunten</Text>
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
