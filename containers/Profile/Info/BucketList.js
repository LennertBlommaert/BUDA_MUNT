import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import HeaderText from '../../../components/HeaderText';
import BucketListItem from './BucketListItem';

const styles = StyleSheet.create({
  container: {},
});

const BucketList = () => (
  <View style={styles.container}>
    <HeaderText fontSize={28}>
      BucketList
    </HeaderText>
    <ScrollView>
      BucketList
    </ScrollView>
  </View>
);

BucketList.propTypes = {};

export default BucketList;
