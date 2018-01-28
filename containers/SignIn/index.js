import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../objects/styles';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

const SignIn = () => (
  <View style={styles.container}>
    <Text>Log in of meld je aan</Text>
    <EmailInput />
    <PasswordInput />
    <SignInButton />
    <SignUpButton />
  </View>
);

SignIn.propTypes = {};

export default SignIn;
