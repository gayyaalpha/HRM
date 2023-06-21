import * as React from 'react';
import {useEffect} from 'react';

import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLogin from '../userLogin';
import CompanyLogin from '../companyLogin';
import Home from '../home';
import Profile from '../drawer/profile';
import PersonalInfo from '../modules/PersonalInfo';
import Settings from '../drawer/settings';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{headerTitle: 'PROFILE INFORMATION'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
