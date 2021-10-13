import React from 'react';
import {View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import Card from '../../ui/card/Card';
import Screen from '../../ui/screen/Screen';

import Logo from '../../assets/images/logo.svg';
import Doctor from '../../assets/images/register/doctor.svg';
import Documents from '../../assets/images/mainUser/documents.svg';

import styles from './MainUserStyle';
import flexStyles from '../../assets/styles/flexStyles';

const MainUser = () => {
  return (
    <Screen style={[styles.container, flexStyles.flexCenterBetween]}>
      <Logo width={verticalScale(200)} height={verticalScale(100)} />
      <View style={[styles.containerCards, flexStyles.flexCenterBetween]}>
        <Card
          onPress={() => {}}
          image={
            <Doctor width={verticalScale(100)} height={verticalScale(100)} />
          }
          text={'Вызвать ветеринарного врача'}
        />
        <Card
          onPress={() => {}}
          image={
            <Documents width={verticalScale(100)} height={verticalScale(100)} />
          }
          text={'Документы о вашем питомце'}
        />
      </View>
    </Screen>
  );
};

export default MainUser;
