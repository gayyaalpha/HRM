import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeIn from '../industry_modules/HomeIn';
import Bpm from '../industry_modules/Bpm';
import IssueReporter from '../industry_modules/IssueReporter';
import IssueInspection from '../industry_modules/IssueInspection';
import AddIssue from '../industry_modules/forms/AddIssue';
import AppStack from './appStack';
import ViewIssue from '../industry_modules/ViewIssue';

const Stack = createNativeStackNavigator();

const IndustryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home In"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home In" component={HomeIn} />
      <Stack.Screen name="BPM" component={Bpm} />
      <Stack.Screen name="Issue Reporter" component={IssueReporter} />
      <Stack.Screen name="Issue Inspection" component={IssueInspection} />
      <Stack.Screen name="Add Issue" component={AddIssue} />
      <Stack.Screen name="HRM" component={AppStack} />
      <Stack.Screen name="View Issue" component={ViewIssue} />
    </Stack.Navigator>
  );
};

export default IndustryStack;
