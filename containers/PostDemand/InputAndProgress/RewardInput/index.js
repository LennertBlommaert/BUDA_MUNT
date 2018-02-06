import React from 'react';
import { View } from 'react-native';
import HeaderText from '../../../../components/HeaderText';
import BodyText from '../../../../components/BodyText';
import InputContainer from './InputContainer';
import InputInfo from './InputInfo';

const RewardInput = () => (
  <View>
    <HeaderText fontSize={22}>Met hoeveel beetjes beloon je?</HeaderText>
    <BodyText opacity={0.7} italic>Time is money. Letterlijk.</BodyText>
    <InputContainer />
    <InputInfo />
  </View>
);

RewardInput.propTypes = {
};

export default RewardInput;
