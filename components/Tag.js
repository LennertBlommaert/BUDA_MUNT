/* eslint-disable global-require */

import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { any, bool, func } from 'prop-types';
import colors from '../objects/colors';

// does only work with requires
const images = {
  gezelschap: require('../assets/img/tags/gezelschap.png'),
  huishouden: require('../assets/img/tags/huishouden.png'),
  verzorging: require('../assets/img/tags/verzorging.png'),
  vervoer: require('../assets/img/tags/vervoer.png'),
  school: require('../assets/img/tags/school.png'),
  taal: require('../assets/img/tags/taal.png'),
  sociaal: require('../assets/img/tags/sociaal.png'),
  technologie: require('../assets/img/tags/technologie.png'),
  administratie: require('../assets/img/tags/administratie.png'),
  tuinieren: require('../assets/img/tags/tuinieren.png'),
  klussen: require('../assets/img/tags/klussen.png'),
  creatief: require('../assets/img/tags/creatief.png'),
  ontspanning: require('../assets/img/tags/ontspanning.png'),
};

const Tag = ({ children, selected, onPress }) => {
  const styles = StyleSheet.create({
    tag: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      width: 150,
      height: 40,

      backgroundColor: selected ? colors.selectedTagBackground : colors.unselectedTagBackground,
      borderRadius: 3,

      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 5,
      shadowOpacity: 0.10,

      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    image: {
      // flex: 1,
      width: 25,
      height: 25,
      alignSelf: 'stretch',
    },
    text: {
      color: selected ? colors.selectedTagText : colors.unselectedTagText,
      fontFamily: 'calibre-medium',
      fontSize: 18,
      textAlign: 'center',
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.tag}>
      <Image
        style={styles.image}
        source={images[children]}
        resizeMode={'contain'}
      />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

Tag.propTypes = {
  children: any.isRequired,
  onPress: func.isRequired,
  selected: bool,
};

Tag.defaultProps = {
  selected: false,
};

export default Tag;
