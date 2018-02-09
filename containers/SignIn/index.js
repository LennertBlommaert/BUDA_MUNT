import React from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

const SignIn = () => (
  <KeyboardAvoidingView
    behavior="padding"
  >
    <Text>Log in of meld je aan</Text>
    <EmailInput />
    <PasswordInput />
    <SignInButton />
    <SignUpButton />
  </KeyboardAvoidingView>
);

SignIn.propTypes = {};

export default SignIn;
