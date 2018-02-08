import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string } from 'prop-types';
import HeaderText from '../../../components/HeaderText';
import BodyText from '../../../components/BodyText';
import UserImage from '../../../components/UserImage';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: colors.inboxItemBorder,
    borderRadius: 3,
  },
});

const ItemTop = ({ firstName, name, photoURL, title }) => (
  <View style={styles.container}>
    <UserImage size={36} photoURL={photoURL} />
    <View>
      <HeaderText fontSize={18}>{title}</HeaderText>
      <BodyText fontSize={17} italic>{firstName} {name}</BodyText>
    </View>
  </View>
);

ItemTop.propTypes = {
  firstName: string.isRequired,
  name: string.isRequired,
  photoURL: string.isRequired,
  title: string.isRequired,
};

export default ItemTop;
