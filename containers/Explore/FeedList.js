// NOTE: seems that FlatList only renders items form same collection: buttons also need to be scollable
// => currently not used

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object, array } from 'prop-types';
import DemandTile from './DemandTile/';
import ProjectTile from './ProjectTile/';
import FeedListFill from './FeedListFill';
import BodyText from '../../components/BodyText';

import NavigateToPostDemandButton from './NavigateToPostDemandButton';
import NavigateToPostProjectButton from './NavigateToPostProjectButton';

const styles = StyleSheet.create({
  feed: {
    flex: 1,
  },
  // recommandationLabel: {
  // },
  buttonContainer: {
    marginBottom: 50,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const FeedList = ({ feedItems, navigation }) => (
  <ScrollView onScroll={() => console.warn('scrolled')} style={styles.feed}>
    <View style={styles.buttonContainer}>
      <NavigateToPostDemandButton navigation={navigation} />
      <NavigateToPostProjectButton navigation={navigation} />
    </View>
    {/* <BodyText style={styles.recommandationLabel} italic opacity={0.7}>Dit lijkt ons helemaal iets voor jou...</BodyText> */}
    {

      feedItems.length > 0 ?

        feedItems.map((item) => {
          if (item.userId) {
            return <DemandTile key={item.uid} navigation={navigation} {...item} />;
          }
          return <ProjectTile key={item.uid} navigation={navigation} {...item} />;
        })

        :

        <BodyText> Geen items om weer te geven</BodyText>

    }
    <FeedListFill />
  </ScrollView>
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
