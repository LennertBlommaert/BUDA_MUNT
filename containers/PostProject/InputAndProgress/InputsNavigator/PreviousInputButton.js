import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { bool, func } from 'prop-types';
import colors from '../../../../objects/colors';
import arrow from '../../../../assets/img/left_arrow_active.png';

const PreviousInputButton = ({ enablePreviousInputButton, previousInputIndex }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: colors.text,
      fontFamily: 'calibre-medium',
      fontSize: 22,
      opacity: 0.7,
    },
    image: {
      width: 16,
      height: 16,
      marginTop: 2,
      marginRight: 5,
    },
  });

  const onPreviousPress = () => {
    if (enablePreviousInputButton) previousInputIndex();
  };

  return (
    enablePreviousInputButton ?
      <TouchableOpacity disabled={!enablePreviousInputButton} style={styles.container} onPress={onPreviousPress}>
        <Image
          style={styles.image}
          source={arrow}
        />
        <Text style={styles.label}>Vorige</Text>
      </TouchableOpacity>
      :
      null
  );
};

PreviousInputButton.propTypes = {
  enablePreviousInputButton: bool.isRequired,
  previousInputIndex: func.isRequired,
};

export default inject(
  ({ store }) => ({
    enablePreviousInputButton: store.enablePreviousInputButton,
    previousInputIndex: store.previousInputIndex,
  }),
)(
  observer(PreviousInputButton),
);
