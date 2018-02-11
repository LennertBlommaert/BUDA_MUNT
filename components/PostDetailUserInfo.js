import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object, string, any } from 'prop-types';
import UserReference from './UserReference';
import ActivatableImage from './ActivatableImage';

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'space-between',
  },
  chatIcon: {
    alignSelf: 'center',
  },
});

const PostDetailUserInfo = ({ currentPostDetail, currentUserUID, style }) => (
  <View style={[styles.userContainer, style]}>
    <UserReference {...currentPostDetail.user} />
    {
      currentPostDetail.user.uid !== currentUserUID ? <ActivatableImage style={styles.chatIcon} icon={'messages'} /> : null
    }
  </View>
);

PostDetailUserInfo.propTypes = {
  currentPostDetail: object.isRequired,
  currentUserUID: string.isRequired,
  style: any,
};

PostDetailUserInfo.defaultProps = {
  style: {},
};

export default inject(
  ({ store }) => ({ currentUserUID: store.currentUserUID }),
)(
  observer(PostDetailUserInfo),
);
