import React from 'react';
import { string, bool } from 'prop-types';
import { View, StyleSheet } from 'react-native';
import colors from '../../../objects/colors';
import BodyText from '../../../components/BodyText';

const Message = ({ payLoad, otherUserMessage }) => {
  const styles = StyleSheet.create({
    container: {
      maxWidth: 222,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      alignSelf: otherUserMessage ? 'flex-start' : 'flex-end',
      marginBottom: 5,
      borderRadius: 3,
      backgroundColor: otherUserMessage ? colors.messageOtherUserBackground : colors.messageBackground,
      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 3,
      shadowOpacity: 0.13,
    },
    text: {
      color: otherUserMessage ? colors.messageOtherUserText : colors.messageText,
    },
  });

  return (
    <View style={styles.container}>
      <BodyText style={styles.text}>{payLoad}</BodyText>
    </View>
  );
};

Message.propTypes = {
  otherUserMessage: bool,
  payLoad: string,
};

Message.defaultProps = {
  otherUserMessage: false,
  payLoad: 'Hey',
};

export default Message;
