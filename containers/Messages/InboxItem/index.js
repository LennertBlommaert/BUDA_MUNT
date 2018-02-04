import React from 'react';
import { TouchableOpacity } from 'react-native';
import { object } from 'prop-types';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';

const InboxItem = ({ otherUser, demand }) => {
  const onPressInboxItem = () => {
    console.warn(`Open conversation with ${otherUser.firstName}`);
  };

  return (
    <TouchableOpacity onPress={onPressInboxItem}>
      <HeaderText>
        {demand.name}
      </HeaderText>
      <BodyText>
        {otherUser.firstName} {otherUser.name}
      </BodyText>
    </TouchableOpacity>
  );
};

InboxItem.propTypes = {
  otherUser: object.isRequired,
};

export default InboxItem;
