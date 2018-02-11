import React, { Component } from 'react';
import { StyleSheet, ScrollView, Animated } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object } from 'prop-types';
import DemandTile from './DemandTile/';
import ProjectTile from './ProjectTile/';
import FeedListFill from './FeedListFill';
import BodyText from '../../components/BodyText';
import OtherUsersSuggestion from '../../components/OtherUsersSuggestion';
import PostButtons from './PostButtons/';

import Screen from '../../components/Screen';
import Header from './Header';

const Feed = Animated.createAnimatedComponent(ScrollView);

const styles = StyleSheet.create({
  feed: {
    alignSelf: 'stretch',
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  otherUsersSuggestion: {
    position: 'relative',
    bottom: 0,
    paddingBottom: 150,
  },
});

class Explore extends Component {
  constructor(props) {
    super(props);

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnim,
        ),
        0,
        40,
      ),
    };
  }

  componentDidMount() {
    this.state.scrollAnim.addListener(({ value }) => {
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        40,
      );
    });
    this.state.offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });
  }

  componentWillUnmount() {
    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
  };

  _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const toValue = this._scrollValue > 40 &&
      this._clampedScrollValue > (40) / 2
      ? this._offsetValue + 40
      : this._offsetValue - 40;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: false,
      // useNativeDriver: true,
    }).start();
  };

  render() {
    const { navigation, feedItems, user } = this.props;
    const { clampedScroll } = this.state;

    const searchInputOffset = clampedScroll.interpolate({
      inputRange: [0, 40],
      // outputRange: [0, -(40)],
      outputRange: [35, 5],
      extrapolate: 'clamp',
    });
    const searchInputOpacity = clampedScroll.interpolate({
      inputRange: [0, 40],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <Screen noHeader>
        <Header searchInputOpacity={searchInputOpacity} searchInputOffset={searchInputOffset} navigation={navigation} />

        <Feed
          scrollEventThrottle={1}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onScrollEndDrag={this._onScrollEndDrag}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: false },
          )}
          showsVerticalScrollIndicator={false}
          style={styles.feed}
          contentContainerStyle={{ alignItems: 'center' }} //eslint-disable-line
        >
          <PostButtons navigation={navigation} />
          {/* <BodyText style={styles.recommandationLabel} italic opacity={0.7}>Dit lijkt ons helemaal iets voor jou...</BodyText> */}
          {

            feedItems.length > 0 ?

              feedItems.map((item, index) => {
                if (item.type === 0) {
                  return <DemandTile key={item.uid} navigation={navigation} {...item} />;
                }
                return (
                  <ProjectTile
                    key={item.uid}
                    navigation={navigation}
                    {...item}
                    active={item.voterUIDs.find(uid => uid === user.uid) !== undefined}
                  />
                );
              })

              :

              <BodyText style={styles.noItemsText} italic> Geen items om weer te geven</BodyText>

          }
          <FeedListFill />
          <OtherUsersSuggestion style={styles.otherUsersSuggestion} />
        </Feed>
      </Screen>
    );
  }
}

Explore.propTypes = {
  navigation: object.isRequired,
  user: PropTypes.observableObject.isRequired,
};

export default inject(
  ({ store }) => ({
    user: store.user,
    feedItems: store.feedItems,
  }),
)(
  observer(Explore),
);
