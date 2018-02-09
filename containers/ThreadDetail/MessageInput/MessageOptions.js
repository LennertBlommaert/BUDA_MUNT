import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../../../components/IconButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

const MessageOptions = () => (
  <View style={styles.container}>
    <IconButton icon={'calendar'} onPress={() => console.warn('Kalender')} />
    <IconButton icon={'location'} onPress={() => console.warn('Locatie')} />
    <IconButton icon={'donate'} onPress={() => console.warn('Doneren')} />
  </View>
);

MessageOptions.propTypes = {};

export default MessageOptions;
