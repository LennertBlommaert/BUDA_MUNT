import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import colors from '../../../objects/colors';
import HeaderText from '../../../components/HeaderText';

const styles = StyleSheet.create({
  textInput: {
    height: 68,
    width: 335,
    borderWidth: 0,
    padding: 20,
    fontSize: 24,
    fontFamily: 'calibre-regular',
    marginTop: 5,
    backgroundColor: colors.textInputBackground,

    borderRadius: 3,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.13,
  },
});

const TitleInput = ({ setTitle, title }) => {
  const handleChangeText = text => setTitle(text);

  return (
    <View>
      <HeaderText fontSize={22}>Waarmee heb je hulp nodig?</HeaderText>

      <TextInput
        style={styles.textInput}
        onChangeText={
          text => handleChangeText(text)
        }
        value={title}
        autoFocus
        placeholder={'Korte titel'}
        keyboardType={'default'}
      />
    </View>
  );
};

TitleInput.propTypes = {
  setTitle: func.isRequired,
  title: string.isRequired,
};

export default inject(
  ({ store }) => ({
    setTitle: store.setTitle,
    title: store.title,
  }),
)(
  observer(TitleInput),
);
