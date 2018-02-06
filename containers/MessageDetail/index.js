import React from 'react';
import { object } from 'prop-types';
import Screen from '../../components/Screen';
import HeaderText from '../../components/HeaderText';

const MessageDetail = ({ navigation }) => (
  <Screen navigation={navigation}>
    <HeaderText>MessageDetail</HeaderText>
  </Screen>
);

MessageDetail.propTypes = {
  navigation: object.isRequired,
};

export default MessageDetail;
