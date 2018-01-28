import React from 'react';
import { Button } from 'react-native';
import { func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import styles from '../../objects/styles';

const SignUpButton = ({ createUser }) => {
  const onPress = () => createUser();

  return (
    <Button
      onPress={onPress}
      title={'Schrijf je in'}
      color={'#646584'}
      style={styles.button}
    />
  );
};

SignUpButton.propTypes = {
  createUser: func.isRequired,
};

export default inject(
  ({ store }) => ({ createUser: store.createUser }),
)(
  observer(SignUpButton),
);
