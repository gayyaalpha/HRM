import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import * as React from 'react';
import {useEffect} from 'react';
import CompanyLogin from './src/components/companyLogin';
import UserLogin from './src/components/userLogin';
import Home from './src/components/home';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStack from './src/components/navigation/appStack';
import AuthStack from './src/components/navigation/authStack';
import {selectToken, selectUser} from './src/app/slice/authSlice';
import {useSelector} from 'react-redux';
import {User} from './src/app/types/user';
import {Tenant} from './src/app/types/tenant';
import {selectBaseUrl, selectTenant} from './src/app/slice/tenantSlice';
import IndustryStack from './src/components/navigation/industryStack';

function App({navigation}: any) {
 

  const access_Token = useSelector(selectToken);

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  console.log(access_Token+'app base url')

  return (
    <NavigationContainer>
      {access_Token == null ? <AuthStack /> :<IndustryStack /> }
      {/* <AppStack /> */}
      {/* <IndustryStack /> */}
    </NavigationContainer>
  );
}
export default App;
