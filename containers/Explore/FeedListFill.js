import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import projectOpenVacancy from '../../assets/img/project_open_vacancy.png';
import projectAttendance from '../../assets/img/project_attendance.png';
import stats from '../../assets/img/stats.png';
import colors from '../../objects/colors';

const styles = StyleSheet.create({
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

const componentName = () => (
  <View>
    <View style={styles.imageContainer}>
      <Image
        style={styles.openVacancyImage}
        source={projectOpenVacancy}
      />
    </View>
    <Image
      style={styles.statsImage}
      source={stats}
    />
    <View style={styles.imageContainer}>
      <Image
        style={styles.projectAttendanceImage}
        source={projectAttendance}
      />
    </View>
  </View>
);

componentName.propTypes = {};

export default componentName;
