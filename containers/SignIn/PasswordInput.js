import React from 'react';
import { TextInput } from 'react-native';
import { func, string } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import styles from '../../objects/styles';

const PasswordInput = ({ setPassword, password }) => {
  const handleChangeText = text => setPassword(text);

  return (
    <TextInput
      style={styles.textInput}
      onChangeText={
        text => handleChangeText(text)
      }
      value={password}
      autoFocus
      autoCapitalize={'none'}
      placeholder={'******'}
    />
  );
};

PasswordInput.propTypes = {
  setPassword: func.isRequired,
  password: string.isRequired,
};

export default inject(
  ({ store }) => ({
    setPassword: store.setPassword,
    password: store.password,
  }),
)(
  observer(PasswordInput),
);
