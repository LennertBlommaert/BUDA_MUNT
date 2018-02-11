import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { object, func, string, bool } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import ItemTop from './ItemTop';
import ItemBot from './ItemBot';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: 335,
    backgroundColor: colors.inboxItemBackground,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.05,

    borderRadius: 3,

    marginBottom: 10,
  },
});

const InboxItem = ({ uid, otherUser, demand, navigation, setCurrentThreadDetailUID, lastMessageTruncatedPayLoad, lastMessageTime, lastMessage, containsUnreadMessages, updateThreadLastOpened }) => {
  const onPressInboxItem = () => {
    setCurrentThreadDetailUID(uid);
    updateThreadLastOpened();
    navigation.navigate('ThreadDetail');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressInboxItem}>
      <ItemTop firstName={otherUser.firstName} name={otherUser.name} title={demand.name} photoURL={otherUser.photoURL} />
      <ItemBot
        containsUnreadMessages={containsUnreadMessages}
        lastMessageTruncatedPayLoad={lastMessageTruncatedPayLoad}
        time={lastMessageTime}
      />
    </TouchableOpacity>
  );
};

InboxItem.propTypes = {
  uid: string.isRequired,
  lastMessageTruncatedPayLoad: string.isRequired,
  otherUser: object.isRequired,
  navigation: object.isRequired,
  setCurrentThreadDetailUID: func.isRequired,
  lastMessageTime: string.isRequired,
  lastMessage: object.isRequired,
  containsUnreadMessages: bool.isRequired,
  updateThreadLastOpened: func.isRequired,
};

export default inject(
  ({ store }) => ({
    setCurrentThreadDetailUID: store.setCurrentThreadDetailUID,
    updateThreadLastOpened: store.updateThreadLastOpened,
  }),
)(
  observer(InboxItem),
);
