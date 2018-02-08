import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { array } from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Messages = ({ messages }) => (
  <ScrollView style={styles.container}>
  </ScrollView>
);

Messages.propTypes = {
  messages: array.isRequired,
};

export default Messages;
