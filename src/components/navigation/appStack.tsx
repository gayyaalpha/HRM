import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../home';

import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Leave from '../drawer/leave';
import OutOfOffice from '../drawer/outOfOffice';
import MissingAttendence from '../drawer/missingAttendence';
import Claim from '../drawer/claim';
import Attendence from '../drawer/attendence';
import OT from '../drawer/ot';
import PaySlip from '../drawer/paySlipt';
import MyTeam from '../drawer/myTeam';
import Settings from '../drawer/settings';
import AboutUs from '../drawer/aboutUs';
import LogOut from '../drawer/logOut';
import CustomDrawer from '../drawer/customDrawer';
import Profile from '../drawer/profile';
import HomeStack from './homeStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ProfileStack from './profileStack';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false} 
      screenOptions={{
        drawerStyle: {
          width: 300,
        },
        drawerActiveTintColor: '#00A3FF',
        drawerInactiveTintColor: 'white',
      }}
      drawerContent={props => (
        <CustomDrawer {...props} naviagation={props.navigation} />
      )}>
        <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={({ route })=>({
          headerTitle: getHeaderTitle(route),
          // drawerItemStyle: {
          //   display: "none",
          // },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#104682'},
        })}
        
      />
      {/* <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerRight: () => (
            <TouchableOpacity
              style={{paddingRight: 15}}
              onPress={() => console.log('Button pressed')}>
              <Icon name="bell-o" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: {backgroundColor: '#08254d'},
        }}
      /> */}
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown:false,
          title: 'Profile',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#104682'},
          // Hide the screen from the drawer
        }}
      />
      <Drawer.Screen
        name="Leave"
        component={Leave}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Out Of Office" component={OutOfOffice} />
      <Drawer.Screen name="Missing Attendence" component={MissingAttendence} />
      <Drawer.Screen name="Claim" component={Claim} />
      <Drawer.Screen name="Attendance" component={Attendence} />
      <Drawer.Screen name="OT" component={OT} />
      <Drawer.Screen name="Pay Slip" component={PaySlip} />
      <Drawer.Screen name="My Team" component={MyTeam} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Log Out" component={LogOut} />
    </Drawer.Navigator>
  );
};
export default AppStack;

function getHeaderTitle(route:any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Personal ';
  switch (routeName) {
    case 'Personal Info':
      return 'Personal Info';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}
