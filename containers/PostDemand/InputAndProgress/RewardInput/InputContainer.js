import React from 'react';
import { func, number } from 'prop-types';
import { Image, View, TextInput, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import colors from '../../../../objects/colors';

import coinImage from '../../../../assets/img/coin_gold.png';
import coinImageLimit from '../../../../assets/img/coin_red.png';

const InputContainer = ({ setReward, reward, maxReward }) => {
  const styles = StyleSheet.create({
    textInputContainer: {
      height: 84,
      // width: 335,
      width: 335,
      borderWidth: 0,
      padding: 20,
      marginTop: 5,
      backgroundColor: reward < maxReward ? colors.coinBackground : colors.coinBackgroundLimit,

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      borderRadius: 3,
    },
    textInput: {
      borderWidth: 0,
      fontSize: 60,
      fontFamily: 'calibre-medium',
      color: reward < maxReward ? colors.coinText : colors.coinTextLimit,
      textAlign: 'right',
      flex: 1,
    },
    coinImage: {
      width: 55,
      height: 56,
      marginRight: 13,
    },
  });

  const handleChangeText = text => setReward(text);

  return (
    <View style={styles.textInputContainer}>
      <Image style={styles.coinImage} source={reward < maxReward ? coinImage : coinImageLimit} />
      <TextInput
        style={styles.textInput}
        onChangeText={
          text => handleChangeText(text)
        }
        value={reward > 0 ? `${reward}` : ''}
        autoFocus
        placeholder={'0'}
        keyboardType={'numeric'}
      />
    </View>
  );
};

InputContainer.propTypes = {
  setReward: func.isRequired,
  reward: number.isRequired,
  maxReward: number.isRequired,
};

InputContainer.defaultProps = {
  maxReward: 100000,
};

export default inject(
  ({ store }) => ({
    setReward: store.setReward,
    reward: store.reward,
    maxReward: store.maxReward,
  }),
)(
  observer(InputContainer),
);
