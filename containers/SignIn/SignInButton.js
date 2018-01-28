import React from 'react';
import { Button } from 'react-native';
import { func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import styles from '../../objects/styles';

const SignInButton = ({ signIn }) => {
  const onPress = () => signIn();

  return (
    <Button
      onPress={onPress}
      title={'Log in'}
      color={'#841584'}
      accessibilityLabel={'Learn more about this purple button'}
      style={styles.button}
    />
  );
};

SignInButton.propTypes = {
  signIn: func.isRequired,
};

export default inject(
  ({ store }) => ({ signIn: store.signIn }),
)(
  observer(SignInButton),
);
