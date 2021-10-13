import React from 'react';
import {View} from 'react-native';

import Input from '../../../ui/input/Input';
import Link from '../../../ui/link/Link';
import Button from '../../../ui/button/Button';

const LoginForm = () => {
  return (
    <View>
      <Input placeholder={'Логин'} marginBottom={24} />
      <Input placeholder={'Пароль'} marginBottom={14} />
      <Link align={'right'} marginBottom={43} onPress={() => {}}>
        Забыл пароль ?
      </Link>
      <Button onPress={() => {}}>Вход</Button>
    </View>
  );
};

export default LoginForm;
