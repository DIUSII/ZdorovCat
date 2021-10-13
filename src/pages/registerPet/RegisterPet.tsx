import React from 'react';

import Step from '../../ui/step/Step';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import Screen from '../../ui/screen/Screen';

import styles from './RegisterPetStyle';
import flexStyles from '../../assets/styles/flexStyles';

const RegisterPet: React.FC<{
  navigation: any;
}> = ({navigation}) => {
  const register = () => {
    navigation.navigate('MainUser');
  };

  return (
    <Screen style={[styles.container, flexStyles.flexCenter]}>
      <Input placeholder={'Имя Питомца'} marginBottom={23} />
      <Input placeholder={'Возраст Питомца'} marginBottom={23} />
      <Input placeholder={'Вид Питомца'} marginBottom={46} />
      <Button onPress={register} marginBottom={9}>
        Зарегистрироваться
      </Button>
      <Step>Шаг 2/2</Step>
    </Screen>
  );
};

export default RegisterPet;
