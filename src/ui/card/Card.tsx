import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {TouchableOpacity, View, Text} from 'react-native';

import flexStyles from '../../assets/styles/flexStyles';

import styles from './CardStyle';

const Card: React.FC<{onPress: any; image: any; text: string}> = ({
  onPress,
  image,
  text,
}) => {
  return (
    <Shadow distance={3} getChildRadius offset={[0, 2, 0, 0]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, flexStyles.flexCenterBetween]}>
        <View style={styles.containerImage}>{image}</View>
        <View style={styles.containerText}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

export default Card;
