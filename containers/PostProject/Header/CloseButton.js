import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import { object, func } from 'prop-types';
import close from '../../../assets/img/close.png';

const styles = StyleSheet.create({
  closeImage: {
    width: 34,
    height: 34,
  },
});

const CloseButton = ({ navigation, clearPostDemandForm }) => {
  const onPressCloseButton = () => {
    clearPostDemandForm();
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPressCloseButton}>
      <Image
        style={styles.closeImage}
        source={close}
      />
    </TouchableOpacity>
  );
};

CloseButton.propTypes = {
  navigation: object.isRequired,
  clearPostDemandForm: func.isRequired,
};

export default inject(
  ({ store }) => ({ clearPostDemandForm: store.clearPostDemandForm }),
)(
  observer(CloseButton),
);
