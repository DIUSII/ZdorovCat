import React from 'react';
import {View, Text} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import Screen from '../../ui/screen/Screen';
import Link from '../../ui/link/Link';
import LoginForm from './loginForm/LoginForm';

import Logo from '../../assets/images/logo.svg';

import styles from './LoginStyle';
import flexStyles from '../../assets/styles/flexStyles';

const Login: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <Screen style={[styles.container, flexStyles.flexCenterBetween]}>
      <View style={styles.containerLogo}>
        <Logo width={verticalScale(200)} height={verticalScale(100)} />
      </View>
      <LoginForm />
      <View>
        <Text style={styles.labelRegister}>У вас нет аккаунта ?</Text>
        <Link align={'center'} onPress={() => navigation.navigate('Register')}>
          Регистрация
        </Link>
      </View>
    </Screen>
  );
};

export default Login;
