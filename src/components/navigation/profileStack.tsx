import * as React from 'react';
import {useEffect} from 'react';

import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLogin from '../userLogin';
import CompanyLogin from '../companyLogin';
import Home from '../home';
import Profile from '../drawer/profile';
import PersonalInfo from '../profile_modules/PersonalInfo';
import Settings from '../drawer/settings';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ContactDetails from '../profile_modules/ContactDetails';
import JobDetails from '../profile_modules/JobDetails';
import Qualifications from '../profile_modules/Qualifications';
import BankDetails from '../profile_modules/BankDetails';
import WorkHistory from '../profile_modules/WorkHistory';
import ContactOffice from '../profile_modules/ContactOffice';
import ContactHome from '../profile_modules/ContactHome';
import DocumentLib from '../profile_modules/DocumentLib';
import BenefitDetails from '../profile_modules/BenefitDetails';
import Payslips from '../profile_modules/Payslips';
import Policies from '../profile_modules/Policies';
import PersonalInfoForm from '../profile_modules/forms/PersonalInfoForm';
import ContactInfoHomeForm from '../profile_modules/forms/ContactInfoHomeForm';
import contactInfoOfficeForm from '../profile_modules/forms/ContactInfoOfficeForm';
import JobDetailsForm from '../profile_modules/forms/JobDetailForm';
import BankDetailsForm from '../profile_modules/forms/BankDetailsForm';

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
      <Stack.Screen name="Personal Info Form" component={PersonalInfoForm} />
      <Stack.Screen name="Contact Office Form" component={contactInfoOfficeForm} />
      <Stack.Screen name="Contact Home Form" component={ContactInfoHomeForm} />
      <Stack.Screen name="Job Details Form" component={JobDetailsForm} />
      <Stack.Screen name="Bank Details Form" component={BankDetailsForm} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
