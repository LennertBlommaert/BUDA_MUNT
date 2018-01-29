import React from 'react';
import { TextInput } from 'react-native';
import { func, string } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import styles from '../../objects/styles';

const TitleInput = ({ setTitle, title }) => {
  const handleChangeText = text => setTitle(text);

  return (
    <TextInput
      style={styles.textInput}
      onChangeText={
        text => handleChangeText(text)
      }
      value={title}
      autoFocus
      placeholder={'title'}
      keyboardType={'default'}
    />
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
