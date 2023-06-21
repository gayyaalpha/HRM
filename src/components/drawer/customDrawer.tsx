import {View, Text, StyleSheet, Dimensions,Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const customDrawer = ({naviagation, ...props}: any) => {
  
  return (
    <View style={{flex: 1, backgroundColor: '#08254D', height: screenHeight}}>
      <View style={{flex: 0.35, padding: 30 }}>
        <TouchableOpacity
          onPress={() => {
            naviagation.navigate('Profile');
          }}>
          <View style={styles.profileContainer}>
            <Image style={styles.profileImage} source={require('../../images/img/check.png')} />
          </View>
          <View style={{ alignItems: 'center',}}>
            <Text style={{color: 'white', fontSize: 20}}>User Name</Text>
            <Text style={{color: '#00A3FF', fontSize: 15}}>Designation</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <View style={{flex: 2}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default customDrawer;

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
        felx:2
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
    
});
