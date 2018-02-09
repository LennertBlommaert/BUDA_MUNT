import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { func } from 'prop-types';
import Tag from '../../components/Tag';
import HeaderText from '../../components/HeaderText';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

const Info = ({ user, signOut }) => {
  const onPressTag = name => console.warn(`Filter on ${name}`);

  return (
    <View style={styles.container}>
      <HeaderText>{user.firstName} {user.name}</HeaderText>
      <Text>{user.email}</Text>
      <View>
        {
          user.capacities.map(c => <Tag onPress={() => onPressTag(c.name)} key={c.uid}>{c.name}</Tag>)
        }
      </View>
      <Button onPress={signOut}>Uitloggen</Button>
    </View>
  );
};

Info.propTypes = {
  user: PropTypes.observableObject.isRequired,
  signOut: func.isRequired,
};

export default inject(
  ({ store }) => ({
    user: store.user,
    signOut: store.signOut,
  }),
)(
  observer(Info),
);
