import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { number } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import projectOpenVacancy from '../../assets/img/project_open_vacancy.png';
import projectAttendance from '../../assets/img/project_attendance.png';
import stats from '../../assets/img/stats.png';
import colors from '../../objects/colors';

const styles = StyleSheet.create({
  container: {
  },
  imageContainer: {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.13,
    marginBottom: 50,
  },
  openVacancyImage: {
    width: 335,
    height: 288,
  },
  projectAttendanceImage: {
    width: 335,
    height: 308,
  },
  statsImage: {
    width: 335,
    height: 78,
    marginBottom: 50,
  },
});

const FeedListFill = ({ currentSegmentedControlItemIndex }) => (
  <View style={styles.container}>
    {
      currentSegmentedControlItemIndex !== 1 ?
        <View style={styles.imageContainer}>
          <Image
            style={styles.openVacancyImage}
            source={projectOpenVacancy}
          />
        </View>
        : null
    }
    <Image
      style={styles.statsImage}
      source={stats}
    />
    {
      currentSegmentedControlItemIndex !== 1 ?
        <View style={styles.imageContainer}>
          <Image
            style={styles.projectAttendanceImage}
            source={projectAttendance}
          />
        </View>
        : null
    }
  </View>
);

FeedListFill.propTypes = {
  currentSegmentedControlItemIndex: number.isRequired,
};

export default inject(
  ({ store }) => ({ currentSegmentedControlItemIndex: store.currentSegmentedControlItemIndex }),
)(
  observer(FeedListFill),
);
