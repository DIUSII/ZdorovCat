import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {verticalScale} from 'react-native-size-matters';

import LeftButton from '../../assets/images/headerLeftButton/leftButton.svg';

import styles from './HeaderLeftButtonStyle';

const HeaderLeftButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}>
      <LeftButton width={verticalScale(30)} height={verticalScale(33)} />
    </TouchableOpacity>
  );
};

export default HeaderLeftButton;
