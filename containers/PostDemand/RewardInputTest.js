import React from 'react';
import { Image, View, TextInput, StyleSheet } from 'react-native';
import { func, number } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import colors from '../../objects/colors';
import HeaderText from '../../components/HeaderText';
import BodyText from '../../components/BodyText';
import coinImage from '../../assets/img/coin_gold.png';
import coinImageLimit from '../../assets/img/coin_red.png';

const TitleInput = ({ setReward, reward, maxReward }) => {
  const styles = StyleSheet.create({
    textInput: {
      borderWidth: 0,
      fontSize: 60,
      fontFamily: 'calibre-medium',
      color: reward < maxReward ? colors.coinText : colors.coinTextLimit,
      flex: 1,
    },
    textInputContainer: {
      height: 84,
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
    coinImage: {
      width: 55,
      height: 56,
    },
  });

  const handleChangeText = text => setReward(text);

  return (
    <View>
      <HeaderText fontSize={22}>Met hoeveel beetjes beloon je?</HeaderText>
      <BodyText opacity={0.7} italic>Time is money. Letterlijk.</BodyText>

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
        {/* <BodyText opacity={0.7} italic>Ongeveer 0h werk</BodyText> */}
      </View>
      {
        reward < maxReward ? null : <BodyText opacity={0.7} italic>{maxReward} beetjes is alles wat je hebt</BodyText>
      }
      <BodyText opacity={0.7} italic>Ongeveer 0h werk</BodyText>
    </View>
  );
};

TitleInput.propTypes = {
  setReward: func.isRequired,
  reward: number.isRequired,
  maxReward: number.isRequired,
};

TitleInput.defaultProps = {
  maxReward: 100000,
};

export default inject(
  ({ store }) => ({
    setReward: store.setReward,
    reward: store.reward,
    maxReward: store.maxReward,
  }),
)(
  observer(TitleInput),
);
