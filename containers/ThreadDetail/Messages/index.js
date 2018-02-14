import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { array } from 'prop-types';
import { inject, observer, PropTypes } from 'mobx-react/native';
import Message from './Message';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 20,
  },
});

const Messages = ({ currentThreadDetailMessages, user }) => (
  <ScrollView
    style={styles.container}
    resetScrollToCoords={{ x: 0, y: 10 }}
    contentContainerStyle={{ justifyContent: 'flex-end' }} //eslint-disable-line
  >
    {
      currentThreadDetailMessages.map(m => <Message otherUserMessage={m.senderId !== user.uid} key={m.uid} payLoad={m.payLoad} />)
    }
  </ScrollView>
);

Messages.propTypes = {
  currentThreadDetailMessages: array.isRequired,
  user: PropTypes.observableObject.isRequired,
};

export default inject(
  ({ store }) => ({
    currentThreadDetailMessages: store.currentThreadDetailMessages,
    user: store.user,
  }),
)(
  observer(Messages),
);
