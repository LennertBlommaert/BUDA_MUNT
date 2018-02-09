import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import otherUsersSuggestion from '../../assets/img/other_users_suggestion.png';
import HeaderText from '../../components/HeaderText';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
  },
  image: {
    width: 441,
    height: 122,
    marginLeft: 20,
  },
  header: {
    marginLeft: 20,
    marginBottom: 5,
  },
});

const OtherUsersSuggestion = () => (
  <View style={styles.container}>
    <HeaderText fontSize={20} style={styles.header}>
      Zij kunnen jou misschien helpen
    </HeaderText>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Image
        style={styles.image}
        source={otherUsersSuggestion}
        resizeMode={'contain'}
      />
    </ScrollView>
  </View>
);

OtherUsersSuggestion.propTypes = {};

export default OtherUsersSuggestion;
