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
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ContactDetails from '../modules/ContactDetails';
import JobDetails from '../modules/JobDetails';
import Qualifications from '../modules/Qualifications';
import BankDetails from '../modules/BankDetails';
import WorkHistory from '../modules/WorkHistory';
import ContactOffice from '../modules/ContactOffice';
import ContactHome from '../modules/ContactHome';
import DocumentLib from '../modules/DocumentLib';
import BenefitDetails from '../modules/BenefitDetails';
import Payslips from '../modules/Payslips';
import Policies from '../modules/Policies';

const Stack = createNativeStackNavigator();

const ProfileStack = ({naviagation}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="profile">
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="Contact Details" component={ContactDetails} />
      <Stack.Screen name="Contact Office" component={ContactOffice} />
      <Stack.Screen name="Contact Home" component={ContactHome} />
      <Stack.Screen name="Personal Info" component={PersonalInfo} />
      <Stack.Screen name="Qualifications" component={Qualifications} />
      <Stack.Screen name="Bank Details" component={BankDetails} />
      <Stack.Screen name="Work History" component={WorkHistory} />
      <Stack.Screen name="Job Details" component={JobDetails} />
      <Stack.Screen name="Document Library" component={DocumentLib} />
      <Stack.Screen name="Benefit Details" component={BenefitDetails} />
      <Stack.Screen name="Payslips" component={Payslips} />
      <Stack.Screen name="Policies" component={Policies} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
