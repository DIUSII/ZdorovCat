import React from 'react';
import {verticalScale} from 'react-native-size-matters';

import Card from '../../ui/card/Card';
import Screen from '../../ui/screen/Screen';

import Woman from '../../assets/images/woman.svg';
import Doctor from '../../assets/images/register/doctor.svg';

import styles from './RegisterStyle';
import flexStyles from '../../assets/styles/flexStyles';

const Register: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <Screen style={[flexStyles.flexCenterEvenly, styles.container]}>
      <Card
        onPress={() => navigation && navigation.navigate('RegisterUser')}
        image={<Woman width={verticalScale(100)} height={verticalScale(100)} />}
        text={'Я владелец питомца'}
      />
      <Card
        onPress={() => navigation.navigate('RegisterDoctor')}
        image={
          <Doctor width={verticalScale(100)} height={verticalScale(100)} />
        }
        text={'Я ветеринарный врач'}
      />
    </Screen>
  );
};

export default Register;
