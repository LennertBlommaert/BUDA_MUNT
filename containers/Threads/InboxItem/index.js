import React from 'react';
import { TouchableOpacity } from 'react-native';
import { object, func, string } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';

const InboxItem = ({ uid, otherUser, demand, navigation, setCurrentThreadDetailUID }) => {
  const onPressInboxItem = () => {
    setCurrentThreadDetailUID(uid);
    navigation.navigate('ThreadDetail');
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
  uid: string.isRequired,
  otherUser: object.isRequired,
  navigation: object.isRequired,
  setCurrentThreadDetailUID: func.isRequired,
};

export default inject(
  ({ store }) => ({ setCurrentThreadDetailUID: store.setCurrentThreadDetailUID }),
)(
  observer(InboxItem),
);
