import React, {useState} from 'react';

import GroupCheckbox from '../../components/groupCheckbox/GroupCheckbox';

import Step from '../../ui/step/Step';
import Input from '../../ui/input/Input';
import Screen from '../../ui/screen/Screen';
import Button from '../../ui/button/Button';

import styles from './RegisterDoctorStyle';
import flexStyles from '../../assets/styles/flexStyles';

const RegisterDoctor: React.FC<{navigation: any}> = ({navigation}) => {
  const [pers, setPers] = useState<boolean>(false);
  const [rules, setRules] = useState<boolean>(false);

  const nextStep = () => navigation.navigate('RegisterDoctorDocument');

  return (
    <Screen style={[styles.container, flexStyles.flexCenter]}>
      <Input placeholder={'Ваше ФИО'} marginBottom={23} />
      <Input placeholder={'Телефон'} marginBottom={23} />
      <Input placeholder={'Ваш стаж'} marginBottom={23} />
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

export default RegisterDoctor;
