import React, {useState} from 'react';

import GroupCheckbox from '../../components/groupCheckbox/GroupCheckbox';

import Step from '../../ui/step/Step';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import Screen from '../../ui/screen/Screen';

import styles from './RegisterUserStyle';
import flexStyles from '../../assets/styles/flexStyles';

const RegisterUser: React.FC<{navigation: any}> = ({navigation}) => {
  const [pers, setPers] = useState<boolean>(false);
  const [rules, setRules] = useState<boolean>(false);

  const nextStep = () => {
    navigation.navigate('RegisterPet');
  };

  return (
    <Screen style={[styles.container, flexStyles.flexCenter]}>
      <Input placeholder={'Имя'} marginBottom={23} />
      <Input placeholder={'Телефон'} marginBottom={23} />
      <Input placeholder={'Пароль'} marginBottom={23} />
      <GroupCheckbox
        pers={pers}
        setPers={setPers}
        rules={rules}
        setRules={setRules}
      />
      <Button onPress={nextStep} marginBottom={9}>
        Следующий шаг
      </Button>
      <Step>Шаг 1/2</Step>
    </Screen>
  );
};

export default RegisterUser;
