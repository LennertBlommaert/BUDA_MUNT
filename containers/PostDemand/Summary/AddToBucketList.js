import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { func, bool } from 'prop-types';

import HeaderText from '../../../components/HeaderText';
import ActivatableImage from '../../../components/ActivatableImage';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  checkbox: {
    // backgroundColor: colors.textInputBackground,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0,

    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,

    height: 50,

    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 2,
    alignSelf: 'center',
  },
});

const AddToBucketList = ({ toggleIsBucketListItem, isBucketListItem }) => (
  <TouchableOpacity style={styles.checkbox} onPress={toggleIsBucketListItem}>
    <HeaderText fontSize={20}>Voeg toe aan mijn bucketlist</HeaderText>
    <ActivatableImage iconSize={50} icon={'checkbox'} active={isBucketListItem} style={styles.image} />
  </TouchableOpacity>
);

AddToBucketList.propTypes = {
  toggleIsBucketListItem: func.isRequired,
  isBucketListItem: bool.isRequired,
};

export default inject(
  ({ store }) => ({
    toggleIsBucketListItem: store.toggleIsBucketListItem,
    isBucketListItem: store.isBucketListItem,
  }),
)(
  observer(AddToBucketList),
);
