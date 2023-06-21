import * as React from 'react';
import {useEffect} from 'react';

import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLogin from '../userLogin';
import CompanyLogin from '../companyLogin';
import Home from '../home';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Company Login" >
      <Stack.Screen
        name="User Login"
        component={UserLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Company Login"
        component={CompanyLogin}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
