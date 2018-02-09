import React from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { func, string } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import colors from '../../../objects/colors';
import SendMessageButton from './SendMessageButton';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.textInputBackground,

    borderRadius: 3,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.13,

    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,

    width: 335,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 20,
    fontFamily: 'calibre-regular',
    flex: 1,
  },
});

const MessageInput = ({ setMessage, message, postMessage }) => {
  const handleChangeText = text => setMessage(text);

  return (
    <KeyboardAvoidingView
      behavior="padding"
    >
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={
            text => handleChangeText(text)
          }
          value={message}
          autoFocus
          placeholder={'Bericht'}
          keyboardType={'default'}
          multiline
          numberOfLines={2}
        />
        {
          message.length > 0 ?
            <SendMessageButton />
            : null
        }
      </View>
    </KeyboardAvoidingView>
  );
};

MessageInput.propTypes = {
  setMessage: func.isRequired,
  message: string.isRequired,
};

export default inject(
  ({ store }) => ({
    setMessage: store.setMessage,
    message: store.message,
  }),
)(
  observer(MessageInput),
);
