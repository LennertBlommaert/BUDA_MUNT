import React from 'react';
import { TextInput } from 'react-native';
import { func, string } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import styles from '../../objects/styles';

const EmailInput = ({ setEmail, email }) => {
  const handleChangeText = text => setEmail(text);

  return (
    <TextInput
      style={styles.textInput}
      onChangeText={
        text => handleChangeText(text)
      }
      value={email}
      autoFocus
      keyboardType={'email-address'}
      autoCapitalize={'none'}
      placeholder={'email'}
    />
  );
};

EmailInput.propTypes = {
  setEmail: func.isRequired,
  email: string.isRequired,
};

export default inject(
  ({ store }) => ({
    setEmail: store.setEmail,
    email: store.email,
  }),
)(
  observer(EmailInput),
);
