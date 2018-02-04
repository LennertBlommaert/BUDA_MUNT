// NOTE: seems that FlatList only renders items form same collection: buttons also need to be scollable
// => currently not used

import React from 'react';
import { View, StyleSheet } from 'react-native';
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
  <View style={styles.feed}>

    {

      feedItems.length > 0 ?

      feedItems
        .map((item) => {
          if (item.userId) {
            return <DemandTile key={item.uid} navigation={navigation} {...item} />;
          }
          return <ProjectTile key={item.uid} navigation={navigation} {...item} />;
        })

       :

       <BodyText> Geen items om weer te geven</BodyText>

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
