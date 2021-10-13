import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HeaderLeftButton from '../components/headerLeftButton/HeaderLeftButton';

import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import MainUser from '../pages/mainUser/MainUser';
import RegisterPet from '../pages/registerPet/RegisterPet';
import RegisterUser from '../pages/registerUser/RegisterUser';
import RegisterDoctor from '../pages/registerDoctor/RegisterDoctor';
import RegisterDoctorDocument from '../pages/registerDoctorDocument/RegisterDoctorDocument';

import mainStyles from '../assets/styles/mainStyles';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Регистрация',
          headerShadowVisible: false,
          headerTitleStyle: {
            ...mainStyles.headerTitle,
          },
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Stack.Screen
        name="RegisterUser"
        component={RegisterUser}
        options={{
          title: 'Регистрация',
          headerShadowVisible: false,
          headerTitleStyle: {
            ...mainStyles.headerTitle,
          },
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Stack.Screen
        name="RegisterPet"
        component={RegisterPet}
        options={{
          title: 'Регистрация',
          headerShadowVisible: false,
          headerTitleStyle: {
            ...mainStyles.headerTitle,
          },
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Stack.Screen
        name="RegisterDoctor"
        component={RegisterDoctor}
        options={{
          title: 'Регистрация',
          headerShadowVisible: false,
          headerTitleStyle: {
            ...mainStyles.headerTitle,
          },
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Stack.Screen
        name="RegisterDoctorDocument"
        component={RegisterDoctorDocument}
        options={{
          title: 'Ваши документы',
          headerShadowVisible: false,
          headerTitleStyle: {
            ...mainStyles.headerTitle,
          },
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Stack.Screen
        name="MainUser"
        component={MainUser}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
