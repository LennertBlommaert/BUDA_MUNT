// NOTE: seems that FlatList only renders items form same collection: buttons also need to be scollable

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object, array } from 'prop-types';
import DemandTile from './DemandTile/';
import ProjectTile from './ProjectTile/';
import BodyText from '../../components/BodyText';

const styles = StyleSheet.create({
  feed: {
    flex: 1,
  },
});

const FeedList = ({ feedItems, navigation }) => (
  <View>

    {

      feedItems.length > 0 ?

      <FlatList
        style={styles.feed}
        data={feedItems}
        keyExtractor={item => item.uid}
        renderItem={({ item }) => { //eslint-disable-line
          return item.userId ? <DemandTile key={item.uid} navigation={navigation} {...item} /> : <ProjectTile key={item.uid} navigation={navigation} {...item} />;
        }}
      />

      :

      <BodyText italic>Niets om weer te geven op jouw feed</BodyText>

    }

  </View>
);

FeedList.propTypes = {
  feedItems: array.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ feedItems: store.feedItems }),
)(
  observer(FeedList),
);
