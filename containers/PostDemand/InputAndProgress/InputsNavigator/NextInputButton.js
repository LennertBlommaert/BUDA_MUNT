import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { bool, func } from 'prop-types';
import colors from '../../../../objects/colors';
import arrowActive from '../../../../assets/img/right_arrow_active.png';
import arrowInActive from '../../../../assets/img/right_arrow_inactive.png';

const NextInputButton = ({ enableNextInputButton, nextInputIndex }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: 1,
    },
    label: {
      color: enableNextInputButton ? colors.progressActive : colors.progressInActive,
      fontFamily: 'calibre-medium',
      fontSize: 22,
      marginRight: 5,
    },
    image: {
      width: 16,
      height: 16,
      marginTop: 4.5,
    },
  });

  const onNextPress = () => {
    if (enableNextInputButton) nextInputIndex();
  };

  return (
    <TouchableOpacity disabled={!enableNextInputButton} style={styles.container} onPress={onNextPress}>
      <Text style={styles.label}>Volgende</Text>
      <Image
        style={styles.image}
        source={enableNextInputButton ? arrowActive : arrowInActive}
      />
    </TouchableOpacity>
  );
};

NextInputButton.propTypes = {
  enableNextInputButton: bool.isRequired,
  nextInputIndex: func.isRequired,
};

export default inject(
  ({ store }) => ({
    enableNextInputButton: store.enableNextInputButton,
    nextInputIndex: store.nextInputIndex,
  }),
)(
  observer(NextInputButton),
);
