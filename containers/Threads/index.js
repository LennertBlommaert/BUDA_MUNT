/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { ScrollView, StyleSheet } from 'react-native';
import { object } from 'prop-types';
import NoContacts from './NoContacts';
import Inbox from './Inbox';
import Screen from '../../components/Screen';
import Button from '../../components/Button';
import BodyText from '../../components/BodyText';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  button: {
    marginBottom: 30,
  },
});

const Threads = ({ userThreads, navigation }) => {
  const onPress = () => {
    console.warn('stuur een bericht');
  };

  return (
    <Screen navigation={navigation}>
      <ScrollView style={styles.container}>
        <Button onPress={onPress} iconSize={25} icon={'addThread'} style={styles.button}>Stuur een bericht</Button>
        {
          userThreads.length > 0 ? <Inbox navigation={navigation} /> : <NoContacts />
        }
        {
          userThreads.length > 4 ? <BodyText italic>Dit waren al jouw berichten</BodyText> : null
        }
      </ScrollView>
    </Screen>
  );
};

Threads.propTypes = {
  userThreads: PropTypes.observableArray.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ userThreads: store.userThreads }),
)(
  observer(Threads),
);
