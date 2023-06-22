import * as React from 'react';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLogin from '../userLogin';
import OutOfOffice from "../drawer/outOfOffice";

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
        component={OutOfOffice}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
